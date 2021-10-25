const { fas } = require('@fortawesome/free-solid-svg-icons');
const fs = require('fs');
const path = require('path');

let cssBuf = fs.readFileSync(path.join(__dirname, 'src', 'main.css'));
const findCSS = (dir) => {
	const files = fs.readdirSync(dir);

	files.forEach((file) => {
		if (fs.statSync(path.join(dir, file)).isDirectory()) {
			findCSS(path.join(dir, file));
		} else {
			if (file.endsWith('.base.css')) {
				cssBuf += fs.readFileSync(path.join(dir, file));
			}
		}
	});
};

findCSS(path.join(__dirname, 'src'));
fs.writeFileSync(path.join(__dirname, 'dist', 'generatedbase.css'), cssBuf);
