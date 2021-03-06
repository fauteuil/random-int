"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomInt = void 0;
// Defaults
const defaultLow = 1;
const defaultHigh = 100;
/**
 * Generate a random integer within the specified range, fall back to defaults.
 * @param {number} low
 * @param {number} high
 */
exports.randomInt = (low, high) => {
    const l = !isNaN(low) ? Number(low) : defaultLow;
    const h = !isNaN(high) ? Number(high) : Math.max(l, defaultHigh);
    return Math.floor(Math.random() * (h - l + 1)) + l;
};
