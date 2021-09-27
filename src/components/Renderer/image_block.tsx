import React from 'react';
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
}) => (
	<div className="image">
		<Image
			className={zoom ? 'medium-zoom-body' : ''}
			src={src}
			width={scaledWidth}
			height={scaledHeight}
			alt={alt}
			blurhash={blurhash}
		/>
	</div>
);

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
					zoom
				/>
			)}
			{node.attrs.alt && <div className="alt">{node.attrs.alt}</div>}
		</div>
	);
};

export default ImageBlock;
