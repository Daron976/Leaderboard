/* eslint-disable */
import validate from './validation.js';

describe('test if validate function works', () => {
  test('validate digits', () => {

    const digits = 3423;
  
    const bool = validate(digits);
  
    expect(bool).toBe(true);
  })

  test('validate digits', () => {

    const letters = 'goat';
  
    const bool = validate(letters);
  
    expect(bool).toBe(false);
  })
})