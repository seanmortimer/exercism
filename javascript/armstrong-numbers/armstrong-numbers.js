//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const isArmstrongNumber = (num) => {
  const numArray = Array.from(String(num), Number);
  const digits = numArray.length;

  const sumOfPowers = numArray.reduce((acc, cur) => acc + cur ** digits, 0);

  return sumOfPowers === num;
};
