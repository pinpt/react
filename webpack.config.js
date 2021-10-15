const path = require("path");
const glob = require("glob");
const fs = require('fs');
const files = {};
fs.readdirSync('./src/components').forEach((dir) => {
	if (dir === 'Internal') {
		fs.readdirSync('./src/components/Internal').forEach((subDir) => {
			if (subDir !== '__test__' && subDir !== 'README.md') {
				files[subDir.toLowerCase()] = `./src/components/Internal/${subDir}`;
			}
		})
	} else {
		files[dir.toLowerCase()] = `./src/components/${dir}`;
	}
});

const config = {
	entry: files,
	externals: {
		react: "React",
		"react-dom": "ReactDOM",
	},
	output: {
		path: path.resolve(__dirname, "dist/cdn"),
		filename: "[name].js",
		library: {
			type: "umd",
			name: "Pinpoint[name]",
		},
		globalObject: "this",
	},
	module: {
		rules: [
			{
				test: /\.ts(x)?$/,
				loader: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
};
module.exports = config;
