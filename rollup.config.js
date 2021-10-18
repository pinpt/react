import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import pkg from './package.json';
import replaceImport from './rewrite-react';

const suffix = '';
const buildid = `${pkg.version}${suffix}`;

const plugins = [
	replace({
		'process.env.NODE_ENV': '"production"',
		preventAssignment: true,
	}),
	json(),
	replaceImport(),
	nodeResolve(),
	commonjs(),
	terser(),
];

const Widgets = {
	MostRecentPostsWidget: './dist/esm/widgets/MostRecentPosts/index.js',
	NotificationBannerWidget: './dist/esm/widgets/NotificationBanner/index.js',
	NotificationModalWidget: './dist/esm/widgets/NotificationModal/index.js',
	NotificationPopupWidget: './dist/esm/widgets/NotificationPopup/index.js',
};

const config = Object.keys(Widgets).map((name) => {
	const input = Widgets[name];
	return {
		input,
		external: ['react', 'react-dom'],
		output: [
			// ES module version, for modern browsers
			{
				dir: './dist/cdn',
				format: 'es',
				sourcemap: true,
				entryFileNames: `${buildid}/module/${name}.js`,
				chunkFileNames: `${buildid}/module/[name].js`,
			},
			// SystemJS version, for older browsers
			{
				dir: './dist/cdn',
				format: 'system',
				sourcemap: true,
				entryFileNames: `${buildid}/nomodule/${name}.js`,
				chunkFileNames: `${buildid}/nomodule/[name].js`,
			},
		],
		plugins,
	};
});

export default config;
