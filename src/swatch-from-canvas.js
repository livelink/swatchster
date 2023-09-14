export const swatchFromCanvas = (canvas, tolerance = 32) => {
  const context = canvas.getContext('2d');
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  const pixelData = imageData.data;
  const standoutColors = new Map();

  for (let i = 0; i < pixelData.length; i += 4) {
    const r = pixelData[i];
    const g = pixelData[i + 1];
    const b = pixelData[i + 2];
    const a = pixelData[i + 3];

    // Check if the pixel is not transparent
    if (a > 0) {
      const hexColor = rgbToHex(r, g, b);
      
      // Check if this color is not too similar to existing standout colors
      let isStandout = true;
      for (const [existingColor, _] of standoutColors.entries()) {
        if (colorDistance(hexColor, existingColor) < tolerance) {
          isStandout = false;
          break;
        }
      }

      if (isStandout) {
        standoutColors.set(hexColor, true);
      }
    }
  }

  return Array.from(standoutColors.keys());
}
