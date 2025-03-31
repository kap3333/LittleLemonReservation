import { render, screen } from "@testing-library/react";
import { timesReducer, initializeTimes } from './Main';

beforeEach(() => {
    // Mock the fetchAPI function
    window.fetchAPI = jest.fn().mockReturnValue([
      '17:00',
      '17:30',
      '18:00',
      '18:30',
      '19:00',
      '19:30',
      '20:00',
      '20:30',
      '21:00'
    ]);
  });

// Test for initializeTimes function
test('initializeTimes returns the expected initial times array', () => {
    // Call the function and check the result
    const initialTimes = initializeTimes();
    
    // Check that it returns an array
    expect(Array.isArray(initialTimes)).toBe(true);
    
    // Check that it contains specific expected times
    expect(initialTimes).toContain('17:00');
    expect(initialTimes).toContain('18:00');
    expect(initialTimes).toContain('19:00');
    
    // Check the array length
    expect(initialTimes.length).toBe(9);
});

// Test for updateTimes function (timesReducer)
test('updateTimes returns the same times array when given a date', () => {
    // Create a mock state (current available times)
    const currentState = [
        '17:00',
        '17:30',
        '18:00',
        '18:30',
        '19:00'
    ];
    
    // Create a mock action
    const action = {
        type: 'UPDATE_TIMES',
        payload: '2023-01-01'  // Some sample date
    };
    
    // Call the reducer and check the result
    const newState = timesReducer(currentState, action);
    
    // Currently we expect the function to return the same available times
    // regardless of the date (as per your current implementation)
    expect(newState).toEqual([
        '17:00',
        '17:30',
        '18:00',
        '18:30',
        '19:00',
        '19:30',
        '20:00',
        '20:30',
        '21:00'
    ]);

        // Check that fetchAPI was called with the converted date
        expect(window.fetchAPI).toHaveBeenCalledWith(new Date(testDate));
    });
