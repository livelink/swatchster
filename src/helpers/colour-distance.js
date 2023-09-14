
export const colourDistance = (hexColor1, hexColor2) => {
  const r1 = parseInt(hexColor1.slice(1, 3), 16);
  const g1 = parseInt(hexColor1.slice(3, 5), 16);
  const b1 = parseInt(hexColor1.slice(5, 7), 16);
  const r2 = parseInt(hexColor2.slice(1, 3), 16);
  const g2 = parseInt(hexColor2.slice(3, 5), 16);
  const b2 = parseInt(hexColor2.slice(5, 7), 16);

  const dr = r1 - r2;
  const dg = g1 - g2;
  const db = b1 - b2;

  return Math.sqrt(dr * dr + dg * dg + db * db);
}