import chroma from 'chroma-js';
import ColorHash from 'color-hash';

const colorHashInstance = new ColorHash();

export const colorForString = (str: string | undefined, brighten = true) => {
	if (!brighten) {
		return colorHashInstance.hex(str ?? '#ddd');
	}
	const color = colorHashInstance.rgb(str ?? '#ddd');
	return chroma(color).brighten().hex();
};

// the following are the basic mapping we provide so that colors are uniform for these types
const tagMapping = {
	bug: { color: '#d73a4a', variable: '--tag-bug-bgcolor' },
	feature: { color: '#B6F5B6', variable: '--tag-feature-bgcolor' },
	improvement: { color: '#a2eeef', variable: '--tag-improvement-bgcolor' },
	chore: { color: '#9B54F5', variable: '--tag-chore-bgcolor' },
} as Record<string, { color: string; variable: string }>;

// the key is what the user entered for the tag, the value is what it is mapped to
const synonymMapping = {
	bug: 'bug',
	fix: 'bug',
	bugfix: 'bug',
	'kind:bug': 'bug',
	'kind:story': 'feature',
	new: 'feature',
	feature: 'feature',
	newfeature: 'feature',
	new_feature: 'feature',
	'new-feature': 'feature',
	'new feature': 'feature',
	improvement: 'improvement',
	enhancement: 'improvement',
	'good first issue': 'improvement',
	chore: 'chore',
	task: 'chore',
	documentation: 'chore',
} as Record<string, string>;

const isAlpha = (val: string) => /#?[a-z0-9]{3,6}/i.test(val);

export const getTagColorStyles = (tag: string, defaultColor?: string) => {
	if (defaultColor) {
		const backgroundColor = isAlpha(defaultColor)
			? defaultColor.charAt(0) !== '#'
				? `#${defaultColor}`
				: defaultColor
			: defaultColor;
		const borderColor = chroma(backgroundColor).darken(2.5).alpha(0.2).hex();
		let color = chroma(backgroundColor).darken(3).alpha(1).hex();
		const contrast = chroma.contrast(color, 'white');
		if (contrast > 8) {
			// if too dark, go the other direction to lighten
			color = chroma(backgroundColor).brighten(4).alpha(1).hex();
		}
		return {
			backgroundColor,
			color,
			border: `1px solid ${borderColor}`,
		};
	}
	const _tag = synonymMapping[tag.toLowerCase()] as string;
	const bg = _tag ? tagMapping[_tag] : ({ color: colorForString(tag), variable: '' } as any);
	const backgroundColor = bg.variable ? `var(${bg.variable},${bg.color})` : bg.color;
	const borderColor = chroma(bg.color).darken(2.5).alpha(0.2).hex();
	let color = chroma(bg.color).darken(3).alpha(1).hex();
	const contrast = chroma.contrast(color, 'white');
	if (contrast > 8) {
		// if too dark, go the other direction to lighten
		color = chroma(bg.color).brighten(4).alpha(1).hex();
	}
	return {
		backgroundColor,
		color: `var(--tag-fgcolor, ${color})`,
		border: `1px solid var(--tag-bcolor, ${borderColor})`,
	};
};
