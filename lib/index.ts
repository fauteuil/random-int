// Defaults
const defaultLow: number = 1;
const defaultHigh: number = 100;

/**
 * Generate a random integer within the specified range, fall back to defaults.
 * @param {number} low
 * @param {number} high
 */
export const randomInt = (low: number, high: number) => {
  const l: number = !isNaN(low) ? Number(low) : defaultLow;
  const h: number = !isNaN(high) ? Number(high) : Math.max(l, defaultHigh);
  return Math.floor(Math.random() * (h - l + 1)) + l;
};
