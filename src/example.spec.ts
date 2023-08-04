/**
 * jest package provides the global "it" and "describe" functions
 * "it" function is used to create a test case
 * "describe" function is used to group test cases
 */

describe('Description of the Test', () => {
  it('should return true', () => {
    expect(true).toBe(true);
  });
});

const add = (a: number, b: number): number => a + b;

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });

  it('should add two negatif numbers', () => {
    expect(add(-1, 2)).toBe(1);
  });
});
