module.exports = {
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
		require('postcss-prefix-selector')({
			prefix: '.Pinpoint',
			transform: function (prefix, selector, prefixedSelector) {
				// ensure that html and body are reverse prefixed
				if (selector === 'html' || selector === 'body') {
					return selector + prefix;
				}
				return prefixedSelector;
			},
		}),
	],
};
