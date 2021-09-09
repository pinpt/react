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

export const extractYoutubePlaceholderImage = (src: string) => {
	// if this looks like a youtube cover image
	if (src?.includes('i.ytimg.com')) {
		const tok = /(\w+)\.jpg$/.exec(src);
		if (tok?.length) {
			const [, name] = tok;
			//https://developers.google.com/youtube/v3/docs/thumbnails
			switch (name) {
				case 'hqdefault': {
					return { width: 800, height: 800 };
				}
				case 'mqdefault': {
					return { width: 240, height: 240 };
				}
				case 'sddefault': {
					return { width: 640, height: 480 };
				}
				case 'maxresdefault': {
					return { width: 1280, height: 720 };
				}
				default:
					break;
			}
		}
	}
	return undefined;
};

const isNum = /^\d+x\d+$/;

const extractSizeFromString = (str: string, qs?: string) => {
	if (isNum.test(str)) {
		const index = str.indexOf('x');
		let width = parseInt(str.substring(0, index));
		let height = parseInt(str.substring(index + 1));
		if (qs && qs.indexOf('?') > 0) {
			// take the resize parameters into consideration when calculating the size
			const qsstr = qs.substring(qs.indexOf('?') + 1);
			const tok = qsstr.split('&');
			tok.forEach((t) => {
				const [key, val] = t.split('=');
				switch (key) {
					case 'rw': {
						width = parseInt(val);
						break;
					}
					case 'rh': {
						height = parseInt(val);
						break;
					}
				}
			});
		}
		return { width, height };
	}
	return extractYoutubePlaceholderImage(str);
};

export const extractImageMetadataFromFileID = (fileid: string) => {
	const { args, ext } = extractFileDataFromFileID(fileid);
	if (args.length) {
		return {
			blurhash: decodeURIComponent(args[0]),
			size: args.length > 1 ? extractSizeFromString(args[1], fileid) : extractSizeFromString(fileid),
			ext,
		};
	}
	return { ext, size: extractSizeFromString(fileid) };
};
