class BuildTimestampPlugin {
	apply(compiler) {
		compiler.hooks.done.tap(
			"BuildTimestampPlugin",
			(compilation, callback) => {
				console.log('\x1b[2m', `Build completed at ${new Date()}`);
			}
		);
	};
}

module.exports = { BuildTimestampPlugin };
