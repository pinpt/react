import React from 'react';
import Zoom from 'react-medium-image-zoom';
import { extractImageMetadataFromFileID } from '../../lib/file_metadata';
import Image from '../Image';
import { NodeProps } from './register';

const InlineImage = ({
	src,
	scaledWidth,
	scaledHeight,
	alt,
	zoom,
	blurhash,
}: {
	src: string;
	scaledWidth?: number;
	scaledHeight?: number;
	zoom?: boolean;
	alt?: string;
	blurhash?: string;
}) => {
	const img = (
		<div className="image">
			<Image src={src} width={scaledWidth} height={scaledHeight} alt={alt} blurhash={blurhash} />
		</div>
	);
	if (zoom && typeof window !== 'undefined') {
		return <Zoom>{img}</Zoom>;
	}
	return img;
};

const ImageBlock = ({ node }: NodeProps) => {
	const { size } = extractImageMetadataFromFileID(node.attrs.src);
	const _scaledWidth = (size?.width ?? 0) * (node.attrs.scale ?? 1);
	const _scaledHeight = (size?.height ?? 0) * (node.attrs.scale ?? 1);

	const scaledWidth = _scaledWidth === 0 || isNaN(_scaledWidth) ? undefined : _scaledWidth;
	const scaledHeight = _scaledHeight === 0 || isNaN(_scaledHeight) ? undefined : _scaledHeight;

	return (
		<div className={`image_block ${node.attrs.align}`}>
			{node.attrs.href ? (
				<a href={node.attrs.href} target="_blank" rel="noopener noreferrer">
					<InlineImage
						src={node.attrs.src}
						scaledWidth={scaledWidth}
						scaledHeight={scaledHeight}
						alt={node.attrs.alt}
						blurhash={node.attrs.blurhash}
						zoom={false}
					/>
				</a>
			) : (
				<InlineImage
					src={node.attrs.src}
					scaledWidth={scaledWidth}
					scaledHeight={scaledHeight}
					alt={node.attrs.alt}
					blurhash={node.attrs.blurhash}
					zoom={node._opts?.zoomable ?? true}
				/>
			)}
			{node.attrs.alt && <div className="alt">{node.attrs.alt}</div>}
		</div>
	);
};

export default ImageBlock;
