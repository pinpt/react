import React from 'react';

interface ImageProps {
	src?: string;
	alt?: string;
	width?: number | undefined;
	height?: number | undefined;
	className?: string;
}

// TODO: add in the blurhash from the file api url

const Image = (props: ImageProps) => {
	const { src, alt = '', width, height, className = '' } = props;
	if (!src) {
		return null;
	}
	return (
		<img
			className={`Pinpoint Image ${className}`}
			src={src}
			alt={alt}
			width={width}
			height={height}
			decoding="async"
		/>
	);
};

export default Image;
