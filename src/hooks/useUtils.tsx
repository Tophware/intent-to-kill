/**
 * Generates a random integer between the specified minimum and maximum values (inclusive).
 * If only one argument is provided, the minimum value is assumed to be 1.
 *
 * @param min - The minimum value for the random integer.
 * @param max - The maximum value for the random integer.
 * @returns A random integer between the specified minimum and maximum values.
 */
function getRandomInt(min: number, max: number): number {
  if (max === undefined) {
    max = min;
    min = 1;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomEnum = <T extends object>(enumObject: T): T[keyof T] => {
  const enumValues = Object.values(enumObject);
  const randomIndex = Math.floor(Math.random() * enumValues.length);
  return enumValues[randomIndex] as T[keyof T];
};

const useUtils = () => {
  return {
    getRandomInt,
    getRandomEnum,
  };
};

export default useUtils;
