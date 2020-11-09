const bandColors = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5, 
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
}

const resistance = (color) => bandColors[color];

export const decodedValue = (colors) => {
  const band1 = resistance(colors[0]);
  const band2 = resistance(colors[1]);
  return 10 * band1 + band2;
};
