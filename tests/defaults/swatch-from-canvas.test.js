/**
 * @jest-environment jsdom
 */

// Import necessary functions and modules
import { swatchFromCanvas } from '../../src/swatch-from-canvas';

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});

// Mock canvas and context for testing
const canvas_1 = document.createElement('canvas');
const ctx = canvas_1.getContext('2d');

// Sample canvas pixel data (replace with your own test data)
const imageData = ctx.createImageData(2, 2);
imageData.data.set([
  255, 0, 0, 255, // Red
  0, 255, 0, 255, // Green
  0, 0, 255, 255, // Blue
  255, 255, 0, 255, // Yellow
]);

// Set the canvas width and height
canvas_1.width = 2;
canvas_1.height = 2;

// Mock getImageData method
ctx.getImageData = () => imageData;

describe('swatchFromCanvas', () => {
  it('should return standout colors from the canvas', () => {
    const standoutColors = swatchFromCanvas(canvas_1);
    
    // The expected result based on the sample data
    const expectedColors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00'];
    
    // Assert that the function returns the expected standout colors
    expect(standoutColors).toEqual(expectedColors);
  });

  it('should return standout colors with custom tolerance', () => {
    const standoutColors = swatchFromCanvas(canvas_1, 50);
    
    // In this case, the colors are all standout due to higher tolerance
    const expectedColors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00'];
    
    expect(standoutColors).toEqual(expectedColors);
  });

  // Add more test cases as needed
});
