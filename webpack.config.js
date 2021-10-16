const path = require('path');
const fs = require('fs');
const TerserPlugin = require('terser-webpack-plugin');

const files = {};
fs.readdirSync('./src/components').forEach((dir) => {
	if (dir === 'Internal') {
		fs.readdirSync('./src/components/Internal').forEach((subDir) => {
			if (subDir !== '__test__' && subDir !== 'README.md') {
				files[subDir] = `./src/components/Internal/${subDir}`;
			}
		});
	} else {
		files[dir] = `./src/components/${dir}`;
	}
});

const config = {
	devtool: 'source-map',
	entry: files,
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM',
	},
	output: {
		path: path.resolve(__dirname, 'dist/cdn'),
		filename: '[name].js',
		library: {
			type: 'umd',
			name: 'Pinpoint[name]',
		},
		globalObject: 'this',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.js$/,
				use: ['source-map-loader'],
				enforce: 'pre',
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			'@fortawesome/free-solid$': '@fortawesome/free-solid-svg-icons/index.es.js',
			'@fortawesome/free-regular$': '@fortawesome/free-regular-svg-icons/index.es.js',
		},
	},
	optimization: {
		minimizer: [new TerserPlugin()],
		flagIncludedChunks: true,
		sideEffects: true,
		usedExports: true,
		concatenateModules: true,
		minimize: true,
	},
};
module.exports = config;
