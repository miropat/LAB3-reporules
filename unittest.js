// Sample function to test
function add(a, b) {
  return a + b;
}

// Test suite for the add function
describe('add function', () => {
  // Test case to check addition of two positive numbers
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  // Test case to check addition of positive and negative numbers
  test('adds 5 + (-3) to equal 2', () => {
    expect(add(5, -3)).toBe(2);
  });

  // Test case to check addition of two negative numbers
  test('adds (-10) + (-5) to equal -15', () => {
    expect(add(-10, -5)).toBe(-15);
  });

  // Test case to check addition of zero and a number
  test('adds 0 + 7 to equal 7', () => {
    expect(add(0, 7)).toBe(7);
  });

  // Test case to check addition of two decimal numbers
  test('adds 2.5 + 3.5 to equal 6', () => {
    expect(add(2.5, 3.5)).toBe(6);
  });

  // Test case to check if the function throws an error for non-numeric inputs
  test('throws error for non-numeric inputs', () => {
    expect(() => add('a', 'b')).toThrow();
  });
});
