const path = require("path");
const config = {
	entry: ["./src/components/Clap/index.tsx"],
	externals: {
		react: "React",
		"react-dom": "ReactDOM",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		library: {
			type: "umd",
			name: "PinpointReact",
		},
		// library: 'umd',
		// prevent error: `Uncaught ReferenceError: self is not define`
		globalObject: "this",
	},
	module: {
		rules: [
			// {
			// 	test: /\.(js|jsx)$/,
			// 	use: "babel-loader",
			// 	exclude: /node_modules/,
			// },
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
