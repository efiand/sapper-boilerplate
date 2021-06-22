const { globalStyle, less, postcss } = require('svelte-preprocess');

module.exports = {
	dev: process.env.NODE_ENV === `development`,
	hydratable: true,
	emitCss: true,
	preprocess: [
		less(),
		globalStyle(), // важно выполнять после less
		postcss({
			plugins: [
				require(`mqpacker`)(),
				require(`autoprefixer`)(),
				require(`cssnano`)()
			]
		})
	]
};
