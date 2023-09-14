import { hexToRgb } from "./helpers/hex-to-rgb"
import { swatchFromRgb } from "./swatch-from-rgb"

export const swatchFromHex = (hex) => {
  return swatchFromRgb(...hexToRgb(hex));
}