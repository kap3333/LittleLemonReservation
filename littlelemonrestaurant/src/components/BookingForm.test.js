import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  // Test data
  const mockProps = {
    availableTimes: ['17:00', '18:00', '19:00'],
    updateTimes: jest.fn(),
    submitForm: jest.fn()
  };

  // Step 1: Test HTML5 validation attributes
  test('date input has required attribute and min attribute', () => {
    render(<BookingForm {...mockProps} />);
    const dateInput = screen.getByLabelText(/choose date/i);
    
    expect(dateInput).toHaveAttribute('required');
    expect(dateInput).toHaveAttribute('min');
    expect(dateInput).toHaveAttribute('aria-required', 'true');
  });

  test('time select has required attribute', () => {
    render(<BookingForm {...mockProps} />);
    const timeSelect = screen.getByLabelText(/choose time/i);
    
    expect(timeSelect).toHaveAttribute('required');
    expect(timeSelect).toHaveAttribute('aria-required', 'true');
  });

  test('guests input has min and max attributes', () => {
    render(<BookingForm {...mockProps} />);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    
    expect(guestsInput).toHaveAttribute('required');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toHaveAttribute('aria-required', 'true');
  });

  // Step 2: Test JavaScript validation functions
  
  // Date validation tests
  test('validateDate returns true for future date', () => {
    render(<BookingForm {...mockProps} />);
    const dateInput = screen.getByLabelText(/choose date/i);
    
    // Set a future date (tomorrow)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowString = tomorrow.toISOString().split('T')[0]; // YYYY-MM-DD format
    
    fireEvent.change(dateInput, { target: { value: tomorrowString } });
    
    // No error message should be displayed
    expect(screen.queryByText(/date is in the past/i)).not.toBeInTheDocument();
  });

  test('validateDate returns false for past date', () => {
    render(<BookingForm {...mockProps} />);
    const dateInput = screen.getByLabelText(/choose date/i);
    
    // Set a past date (yesterday)
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayString = yesterday.toISOString().split('T')[0]; // YYYY-MM-DD format
    
    fireEvent.change(dateInput, { target: { value: yesterdayString } });
    
    // Error message should be displayed
    expect(screen.getByText(/date is in the past/i)).toBeInTheDocument();
  });

  // Guest validation tests
  test('validateGuest returns true for valid guest count', () => {
    render(<BookingForm {...mockProps} />);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    
    // Set a valid guest count
    fireEvent.change(guestsInput, { target: { value: '5' } });
    
    // No error message should be displayed
    expect(screen.queryByText(/must be between 1 and 10/i)).not.toBeInTheDocument();
  });

  test('validateGuest returns false for invalid guest count', () => {
    render(<BookingForm {...mockProps} />);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    
    // Set an invalid guest count
    fireEvent.change(guestsInput, { target: { value: '15' } });
    
    // Error message should be displayed
    expect(screen.getByText(/must be between 1 and 10/i)).toBeInTheDocument();
  });

  // Time validation tests
  test('validateTime returns true for selected time', () => {
    render(<BookingForm {...mockProps} />);
    const timeSelect = screen.getByLabelText(/choose time/i);
    
    // Select a valid time
    fireEvent.change(timeSelect, { target: { value: '18:00' } });
    
    // No error message should be displayed
    expect(screen.queryByText(/select a reservation time/i)).not.toBeInTheDocument();
  });

  test('validateTime returns false for unselected time', () => {
    render(<BookingForm {...mockProps} />);
    const timeSelect = screen.getByLabelText(/choose time/i);
    
    // First select a time, then deselect it to trigger validation
    fireEvent.change(timeSelect, { target: { value: '18:00' } });
    fireEvent.change(timeSelect, { target: { value: '' } });
    
    // Error message should be displayed
    expect(screen.getByText(/select a reservation time/i)).toBeInTheDocument();
  });

  // Form submission tests
  test('form submission is prevented when validation fails', () => {
    render(<BookingForm {...mockProps} />);
    
    // Submit form without filling required fields
    const submitButton = screen.getByText(/make reservation/i);
    fireEvent.click(submitButton);
    
    // Check that submitForm was not called
    expect(mockProps.submitForm).not.toHaveBeenCalled();
  });

  test('form submits successfully when all fields are valid', () => {
    render(<BookingForm {...mockProps} />);
    
    // Fill in all fields with valid values
    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    
    // Set a future date (tomorrow)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowString = tomorrow.toISOString().split('T')[0];
    
    fireEvent.change(dateInput, { target: { value: tomorrowString } });
    fireEvent.change(timeSelect, { target: { value: '18:00' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
    
    // Submit form
    const submitButton = screen.getByText(/make reservation/i);
    fireEvent.click(submitButton);
    
    // Check that submitForm was called with correct data
    expect(mockProps.submitForm).toHaveBeenCalledWith({
      date: tomorrowString,
      time: '18:00',
      guests: 4,
      occasion: 'Birthday'
    });
  });
});