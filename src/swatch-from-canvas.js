import { rgbToHex } from "./helpers/rgb-to-hex";
import { colourDistance } from "./helpers/colour-distance";

const swatchFromCanvas = (canvas, tolerance = 32) => {
  const context = canvas.getContext('2d');
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  const pixelData = imageData.data;
  const standoutColours = new Map();

  for (let i = 0; i < pixelData.length; i += 4) {
    const r = pixelData[i];
    const g = pixelData[i + 1];
    const b = pixelData[i + 2];
    const a = pixelData[i + 3];

    // Check if the pixel is not transparent
    if (a > 0) {
      const hexColour = rgbToHex(r, g, b);
      
      // Check if this colour is not too similar to existing standout colours
      let isStandout = true;
      for (const [existingColour, _] of standoutColours.entries()) {
        if (colourDistance(hexColour, existingColour) < tolerance) {
          isStandout = false;
          break;
        }
      }

      if (isStandout) {
        standoutColours.set(hexColour, true);
      }
    }
  }

  return Array.from(standoutColours.keys());
}

export { swatchFromCanvas };