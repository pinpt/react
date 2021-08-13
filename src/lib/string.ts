import slugify from 'slugify';

export const slugifyString = (val: string) => {
	return slugify(val, { replacement: '-', strict: true, remove: /[*+~.()'"!:@]/g })
		.replace(/-$/, '')
		.replace(/^-/, '');
};

// WARNING only call this when relative to the public domain, not inside the app
export const slugifyContent = (id: string, title?: string) => {
	if (title) {
		const slug = slugifyString(title);
		return `/entry/${id}/${slug}`;
	}
	return `/entry/${id}`;
};

const numFormat = new Intl.NumberFormat();

export const formatNumber = (value: number) => numFormat.format(value);

// borrowed from https://github.com/HubSpot/humanize
export const compactNumber = (value: number, decimals = 0) => {
	decimals = Math.max(decimals, 0);
	const unsignedNumber = Math.abs(value);
	const unsignedNumberString = String(unsignedNumber);
	const numberLength = unsignedNumberString.length;
	const numberLengths = [13, 10, 7, 4];
	const bigNumPrefixes = ['T', 'B', 'M', 'k'];

	// small numbers
	if (unsignedNumber < 1000) {
		return `${unsignedNumberString}`;
	}

	// really big numbers
	if (numberLength > numberLengths[0] + 3) {
		return value.toExponential(decimals).replace('e+', 'x10^');
	}

	// 999 < unsignedNumber < 999,999,999,999,999
	let length;
	for (let i = 0; i < numberLengths.length; i++) {
		const _length = numberLengths[i];
		if (numberLength >= _length) {
			length = _length;
			break;
		}
	}

	const decimalIndex = numberLength - length + 1;
	const unsignedNumberCharacterArray = unsignedNumberString.split('');

	const wholePartArray = unsignedNumberCharacterArray.slice(0, decimalIndex);
	const decimalPartArray = unsignedNumberCharacterArray.slice(decimalIndex, decimalIndex + decimals + 1);

	const wholePart = wholePartArray.join('');

	// pad decimalPart if necessary
	let decimalPart = decimalPartArray.join('');
	if (decimalPart.length < decimals) {
		decimalPart += `${Array(decimals - decimalPart.length + 1).join('0')}`;
	}

	let output;
	if (decimals === 0) {
		output = `${wholePart}${bigNumPrefixes[numberLengths.indexOf(length)]}`;
	} else {
		const outputNumber = Number(`${wholePart}.${decimalPart}`).toFixed(decimals);
		output = `${outputNumber}${bigNumPrefixes[numberLengths.indexOf(length)]}`;
	}
	return output;
};

export const getTwitterProfileFromURL = (url?: string) => {
	if (url) {
		if (url.startsWith('@')) {
			return url;
		} else if (url.includes('twitter.com/')) {
			const u = new URL(url);
			const tok = u.pathname.substring(1).split('/');
			return `@${tok[0]}`;
		}
	}
	return undefined;
};

export const getQueryString = (params: Record<string, string> = {}) => {
	return Object.keys(params).map((key) => `${key}=${encodeURIComponent(params[key])}`).join('&');
};
