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
				if (
					selector.startsWith(prefix) ||
					selector.charAt(0) === ':' ||
					selector.startsWith('.dark') ||
					selector.startsWith('html') ||
					selector.startsWith('body') ||
					selector.startsWith('.medium-zoom') ||
					selector.charAt(0) === '['
				) {
					return selector;
				}
				return prefixedSelector;
			},
		}),
	],
};
