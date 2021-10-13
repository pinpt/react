import chroma from 'chroma-js';
import ColorHash from 'color-hash';

const colorHashInstance = new ColorHash();

const checkConstrast = (_color: string, check = 'white') => {
	let color = _color;
	// try and find a color that is within our acceptable range for contrast
	for (let c = 0; c < 4; c++) {
		const contrast = chroma.contrast(color, check);
		if (contrast < 4.5) {
			color = chroma(color).darken(1).alpha(1).hex();
			continue;
		} else if (contrast > 10) {
			color = chroma(color).brighten(1).alpha(1).hex();
			continue;
		}
		break;
	}
	return color;
};

export const colorForString = (str: string | undefined, brighten = true) => {
	if (!brighten) {
		return colorHashInstance.hex(str ?? '#ddd');
	}
	const color = colorHashInstance.rgb(str ?? '#ddd');
	return checkConstrast(chroma(color).brighten().hex());
};

// the following are the basic mapping we provide so that colors are uniform for these types
const defaultTagMapping = {
	bug: { color: '#d73a4a' },
	feature: { color: '#B6F5B6' },
	improvement: { color: '#a2eeef' },
	chore: { color: '#9B54F5' },
} as Record<string, { color: string }>;

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

const getTagTextColor = (tagBackgroundColor: string) => {
	const contrast = chroma.contrast(tagBackgroundColor, '#fff');
	let color = '#fff';
	if (contrast < 4.5) {
		color = '#000';
	}
	return color;
};

const isAlpha = (val: string) => /#?[a-z0-9]{3,6}/i.test(val);

const getTagBorderColor = (tagBackgroundColor: string) =>
	checkConstrast(chroma(tagBackgroundColor).darken(2.5).alpha(0.2).hex());

export const getTagColorStyles = (
	tag: string,
	defaultColor?: string,
	tagMapping: Record<string, { color?: string; backgroundColor: string }> = {}
): {
	color: string;
	backgroundColor: string;
	border: string;
} => {
	if (defaultColor) {
		const backgroundColor = isAlpha(defaultColor)
			? defaultColor.charAt(0) !== '#'
				? `#${defaultColor}`
				: defaultColor
			: defaultColor;
		return {
			backgroundColor,
			color: getTagTextColor(backgroundColor),
			border: `1px solid ${getTagBorderColor(backgroundColor)}`,
		};
	}
	if (tagMapping[tag]) {
		const { color: _color, backgroundColor } = tagMapping[tag];
		return {
			backgroundColor,
			color: _color ? _color : getTagTextColor(backgroundColor),
			border: `1px solid ${getTagBorderColor(backgroundColor)}`,
		};
	}
	const _tag = synonymMapping[tag.toLowerCase()];
	const backgroundColor = _tag ? defaultTagMapping[_tag].color : colorForString(tag);
	return {
		backgroundColor,
		color: getTagTextColor(backgroundColor),
		border: `1px solid ${getTagBorderColor(backgroundColor)}`,
	};
};
