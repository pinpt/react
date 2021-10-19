const MagicString = require('magic-string');
const pkg = require('./package.json');
const react = pkg.devDependencies['react'];
const reactVersion = react.replace('^', '');

/**
 * Rewrite the react and react-dom imports to point to the ESM version
 * This must match the same version as used in the beacon
 */

function rewriteImports() {
	return {
		name: 'rewriteReactImports',
		renderChunk(code, info) {
			const a = code.indexOf(`from 'react';`);
			const b = code.indexOf(`from 'react-dom';`);
			if (a > 0 || b > 0) {
				const magicString = new MagicString(code);
				if (a > 0) {
					magicString.overwrite(a + 6, a + 13, `https://esm.sh/react@${reactVersion}';`);
				}
				if (b > 0) {
					magicString.overwrite(b + 6, b + 17, `https://esm.sh/react-dom@${reactVersion}';`);
				}
				const map = magicString.generateMap({
					source: info.facadeModuleId,
				});
				return { code: magicString.toString(), map };
			}
			return null;
		},
	};
}

export default rewriteImports;
