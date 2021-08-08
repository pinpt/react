const looksLikeURL = /^(https|fileid):/;
/**
 * format is:
 *
 * <ID>[;VAL]+[.EXT]
 *
 * such as:
 *
 * 1234;blurhash;10x10.png
 *
 */
export const extractFileDataFromFileID = (url: string) => {
	if (!url || url.indexOf('data:') === 0) {
		return { id: '', args: [], ext: '' };
	}
	const fileid = looksLikeURL.test(url)
		? url.indexOf('fileid:') === 0
			? new URL(url).pathname
			: new URL(url).pathname.substring(1)
		: url;
	const tok = fileid.split(';');
	const id = tok[0];
	const args = tok.splice(1);
	const lastPart = args?.length ? args[args.length - 1] : '';
	const extIndex = lastPart.lastIndexOf('.');
	let ext = '';
	if (extIndex > 0) {
		ext = lastPart.substring(extIndex + 1);
		args[args.length - 1] = lastPart.substring(0, extIndex);
	}
	return {
		id,
		args,
		ext,
	};
};

const extractSizeFromString = (str: string) => {
	const index = str.indexOf('x');
	if (index > 0) {
		const width = parseInt(str.substring(0, index));
		const height = parseInt(str.substring(index + 1));
		return { width, height };
	}
	return undefined;
};

export const extractImageMetadataFromFileID = (fileid: string) => {
	const { args, ext } = extractFileDataFromFileID(fileid);
	if (args.length) {
		return {
			blurhash: decodeURIComponent(args[0]),
			size: args.length > 1 ? extractSizeFromString(args[1]) : undefined,
			ext,
		};
	}
	return { ext };
};
