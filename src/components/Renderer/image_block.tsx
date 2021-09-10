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
}: {
	src: string;
	scaledWidth?: number;
	scaledHeight?: number;
	zoom?: boolean;
	alt?: string;
}) => (
	<div className="image">
		<Image className={zoom ? 'medium-zoom-body' : ''} src={src} width={scaledWidth} height={scaledHeight} alt={alt} />
	</div>
);

const ImageBlock = ({ node }: NodeProps) => {
	const { size } = extractImageMetadataFromFileID(node.attrs.src);
	const scaledWidth = (size?.width ?? 0) * node.attrs.scale ?? 1;
	const scaledHeight = (size?.height ?? 0) * node.attrs.scale ?? 1;

	return (
		<div className={`image_block ${node.attrs.align}`}>
			{node.attrs.href ? (
				<a href={node.attrs.href} target="_blank" rel="noopener noreferrer">
					<InlineImage
						src={node.attrs.src}
						scaledWidth={scaledWidth}
						scaledHeight={scaledHeight}
						alt={node.attrs.alt}
						zoom={false}
					/>
				</a>
			) : (
				<InlineImage
					src={node.attrs.src}
					scaledWidth={scaledWidth}
					scaledHeight={scaledHeight}
					alt={node.attrs.alt}
					zoom
				/>
			)}
			{node.attrs.alt && <div className="alt">{node.attrs.alt}</div>}
		</div>
	);
};

export default ImageBlock;
