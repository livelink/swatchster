import { rgbToHex } from "./helpers/rgb-to-hex";

const SHADES = 10

export const swatchFromRgb = (red, green, blue) => {
  const shade = rgbToHex(red, green, blue);

  const redDiff = 255 - red;
  const greenDiff = 255 - green;
  const blueDiff =  255 - blue;

  const redStepValue = redDiff / SHADES
  const greenStepValue = greenDiff / SHADES
  const blueStepValue = blueDiff / SHADES

  const shade1 = [red - redStepValue * 2, green - greenStepValue * 2, blue - blueStepValue * 2];
  const shade2 = [red - redStepValue, green - greenStepValue, blue - blueStepValue];
  const shade3 = [red + redStepValue, green + greenStepValue, blue + blueStepValue];
  const shade4 = [red + redStepValue * 2, green + greenStepValue * 2, blue + blueStepValue * 2];

  const swatch = [rgbToHex(...shade1), rgbToHex(...shade2), shade, rgbToHex(...shade3), rgbToHex(...shade4)];

  return swatch;
}