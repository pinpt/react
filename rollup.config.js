import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';
import replaceImport from './rewrite-react';

const plugins = [
	replace({
		'process.env.NODE_ENV': '"production"',
		preventAssignment: true,
	}),
	replaceImport(),
	nodeResolve(),
	commonjs(),
	terser(),
];

const Modules = {
	Banner: './dist/esm/components/Banner/index.js',
	TestWidget: './dist/esm/widgets/Test.js',
};

const config = Object.keys(Modules).map((name) => {
	const input = Modules[name];
	return {
		input,
		external: ['react', 'react-dom'],
		output: [
			// ES module version, for modern browsers
			{
				dir: './dist/cdn',
				format: 'es',
				sourcemap: true,
				entryFileNames: `${pkg.version}/module/${name}.js`,
				chunkFileNames: `${pkg.version}/module/[name].js`,
			},
			// SystemJS version, for older browsers
			{
				dir: './dist/cdn',
				format: 'system',
				sourcemap: true,
				entryFileNames: `${pkg.version}/nomodule/${name}.js`,
				chunkFileNames: `${pkg.version}/nomodule/[name].js`,
			},
		],
		plugins,
	};
});

export default config;
