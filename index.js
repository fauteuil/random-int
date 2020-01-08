/**
 * Generate a random integer within the specified range, with low and high limits included.
 * @param {*} low 
 * @param {*} high 
 */
const randomInt = (low = 1,high = 100) => Math.floor(Math.random() * (high - low + 1) ) + low;

module.exports = { randomInt };