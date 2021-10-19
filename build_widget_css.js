const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');
const { version } = require('./package.json');

const dir = path.join(__dirname, 'src', 'widgets');
const dirs = fs.readdirSync(dir);

const toModuleName = (str) =>
	str.charAt(0).toUpperCase() +
	str.substring(1).replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', '')) +
	'Widget';

const tailwindBin = path.join(__dirname, 'node_modules', '.bin', 'tailwindcss');

let cssBuf = '';

dirs.forEach((name) => {
	const fndir = path.join(dir, name);
	const css = path.join(fndir, 'style.css');
	if (fs.existsSync(css)) {
		const modName = toModuleName(name);
		['module', 'nomodule'].forEach((scope) => {
			const outfn = path.join(__dirname, 'dist', 'cdn', version, scope, modName + '.css');
			console.log('Compiling CSS...', css, '=>', outfn);
			execSync(`${tailwindBin} --jit --postcss -m -i ${css} -o ${outfn}`, {
				env: { ...process.env, NODE_ENV: 'production' },
				stdio: ['pipe', 'ignore', 'pipe'],
			});
			if (scope === 'module') {
				cssBuf += fs.readFileSync(outfn);
			}
		});
	}
});

fs.writeFileSync(path.join(__dirname, 'dist', 'widget.css'), cssBuf);
