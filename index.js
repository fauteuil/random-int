/**
 * Generate a random integer within the specified range, with low and high limits included.
 * @param {number} low 
 * @param {number} high 
 */
const randomInt = (low = 1, high = 100) => {
	// Guard against non-numeric values: set NaNs to defaults.
	if (isNaN(low)) { low = 1 };
	if (isNaN(high)) { high = 100 };
	// Maybe overkill, but return -1 if high is less than low.
	if (high > low) { return -1 };
	return Math.floor(Math.random() * (high - low + 1)) + low;
};

module.exports = randomInt ;