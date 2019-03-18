const babelConfig = (api) => {

	api.cache(true);

	const presets = [
		"@babel/preset-react",
		"@babel/preset-env"
	];

	const plugins = [

		"@babel/plugin-proposal-class-properties",
		"@babel/plugin-transform-modules-commonjs",
		["@babel/plugin-proposal-decorators", {"legacy": true}],
		"@babel/plugin-proposal-export-default-from",
		["@babel/plugin-transform-spread", {"loose": true}]

	];

	return { presets, plugins };
}

module.exports = babelConfig;