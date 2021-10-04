import { decode } from 'blurhash';
import React from 'react'; // don't remove
import { extractImageMetadataFromFileID, isFileAPI } from '../../lib/file_metadata';

const getImageURLFromArray = (buf: Uint8ClampedArray, w: number, h: number) => {
	if (typeof document !== 'undefined') {
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');
		if (ctx) {
			canvas.width = w;
			canvas.height = h;
			const imgData = ctx.createImageData(w, h);
			imgData.data.set(buf);
			ctx.putImageData(imgData, 0, 0);
			return canvas.toDataURL();
		}
	}
};

interface ImageProps {
	src?: string;
	alt?: string;
	width?: number | undefined;
	height?: number | undefined;
	className?: string;
	srcSet?: string;
	sizes?: string;
	blurhash?: string;
	lazy?: boolean;
}

const NativeImage = (props: ImageProps) => {
	const ref = React.useRef<any>();
	const { src, alt = '', width, height, className = '', srcSet, sizes, blurhash, lazy = true } = props;
	const [ready, setReady] = React.useState(!lazy);
	React.useEffect(() => {
		if (src && ref.current && lazy) {
			let observed = true;
			const lazyBackgroundObserver = new IntersectionObserver(function (entries) {
				entries.forEach(function (entry) {
					if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
						entry.target.classList.add('visible');
						setReady(true);
						lazyBackgroundObserver.unobserve(entry.target);
						observed = false;
					}
				});
			});
			lazyBackgroundObserver.observe(ref.current);
			return () => {
				if (ref.current && observed) {
					lazyBackgroundObserver.unobserve(ref.current);
				}
			};
		}
	}, [src, ref]);
	return (
		<BlurImage
			ref={ref}
			className={className}
			src={ready ? src : blurhash}
			alt={alt}
			width={width}
			height={height}
			srcSet={ready ? srcSet : undefined}
			sizes={ready ? sizes : undefined}
			ready={ready}
			blurhash={blurhash}
			lazy={lazy}
		/>
	);
};

interface BlurImageProps extends ImageProps {
	ready?: boolean;
}

const BlurImage = React.forwardRef<any, BlurImageProps>((props: BlurImageProps, ref) => {
	const r = extractImageMetadataFromFileID(props.src ?? '');
	let src: string | undefined = undefined;
	let isBlurhash = false;
	if (!props.ready) {
		let bh = props.blurhash ?? r.blurhash;
		if (bh?.startsWith('data:')) {
			src = bh;
			isBlurhash = true;
		} else if (bh) {
			const imgdata = decode(bh, 4, 4);
			src = getImageURLFromArray(imgdata, 4, 4);
			isBlurhash = true;
		}
	} else {
		src = props.src;
	}
	if (!src) {
		src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
		// show a 1x1 transparent pixel while loading if no blurhash
	}
	return (
		<img
			ref={ref}
			src={src}
			alt={props.alt ?? ''}
			className={`Pinpoint Image ${props.className ?? ''} ${isBlurhash ? 'blurhash' : ''}`}
			width={props.width ?? r.size?.width}
			height={props.height ?? r.size?.height}
			decoding="async"
			srcSet={props.srcSet}
			sizes={props.sizes}
			loading={props.lazy ? 'lazy' : 'eager'}
		/>
	);
});

const breakpoints = [640, 768, 1024, 1280, 1328]; // aligned to tailwind

const DynamicImage = (props: ImageProps) => {
	const r = extractImageMetadataFromFileID(props.src!);
	const [loaded, setLoaded] = React.useState(!props.lazy);
	React.useEffect(() => {
		setLoaded(true);
	}, []);
	if (loaded) {
		if (r.size) {
			const srcSets: string[] = [];
			const sizes: string[] = [];
			for (let c = 0; c < breakpoints.length; c++) {
				const width = breakpoints[c];
				if (width < r.size.width) {
					srcSets.push(`${props.src}?rw=${width} ${width}w`);
					sizes.push(`(min-width: ${width}px) ${width}px`);
				}
			}
			// if our size is greater than the largest breakpoint, add in the original as well in case a browser supports it
			if (r.size.width > breakpoints[breakpoints.length - 1]) {
				srcSets.push(`${props.src} ${r.size.width}w`);
				sizes.push(`(min-width: ${r.size.width}px) ${r.size.width}px`);
			}
			return (
				<NativeImage
					{...props}
					srcSet={srcSets.join(', ')}
					sizes={sizes.join(', ')}
					width={props.width ?? r.size?.width}
					height={props.height ?? r.size?.height}
				/>
			);
		}
		return <NativeImage {...props} />;
	}
	return (
		<BlurImage
			className={props.className}
			src={props.src}
			alt={props.alt}
			width={props.width}
			height={props.height}
			blurhash={props.blurhash}
			ready={loaded}
		/>
	);
};

const Image = (props: ImageProps) => {
	const { src, blurhash } = props;
	if (!src && !blurhash) {
		return null;
	}
	if (src && isFileAPI(src)) {
		return <DynamicImage {...props} />;
	}
	return <NativeImage {...props} />;
};

export default Image;
