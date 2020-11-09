const divisibleBy = (a, b) => a % b === 0;

export const isLeap = (year) => {
  let leap = false;

  if (divisibleBy(year, 4) && !divisibleBy(year, 100)) {
    leap = true;
  }
  if (divisibleBy(year, 400)) {
    leap = true;
  }
  return leap;
}
