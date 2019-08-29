/**
 * Delay the function call by the specified timeout length.
 * @param {*} func 
 * @param {*} timeout 
 * @param  {...any} args 
 */
const asyncFunctionDelay = async (func, timeout, ...args) => {
	// Wrap the timeout and function call in a promise.
	await new Promise(resolve => setTimeout(resolve, timeout));
	// Call the valid function with the supplied arguments.
	if (func && typeof func === 'function') {
		return func(...args);
	}
};

module.exports = { asyncFunctionDelay };