class BuildTimestampPlugin {
	apply = (compiler) => {
		compiler.hooks.done.tap(
			"BuildTimestampPlugin",
			(compilation, callback) => {
				console.log(`Build completed at ${new Date()}`);
			}
		);
	};
}

module.exports = { BuildTimestampPlugin };
