const path = require('path')

module.exports = {
	stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-jest'],
	webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.css$/,
			use: [
				{
					loader: "postcss-loader",
					options: {
						// HERE: OPTIONS
						postcssOptions: {
							plugins: [require("tailwindcss"), require("autoprefixer")],
						},
					},
				},
			],
			include: path.resolve(__dirname, "../"),
		})
		return config
	}
};
