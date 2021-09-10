import React from 'react';
import { extractImageMetadataFromFileID } from '../../lib/file_metadata';
import Image from '../Image';
import { NodeProps } from './register';

const InlineImage = ({ node }: NodeProps) => {
	const { size } = extractImageMetadataFromFileID(node.attrs?.src);
	const width = size?.width;
	const height = size?.height;

	const image = (
		<Image src={node.attrs?.src} width={width} height={height} alt={node.attrs?.alt} className="inline_image" />
	);

	return (
		<div>
			{node.attrs?.href ? (
				<a href={node.attrs.href} target="_blank" rel="noopener noreferrer">
					{image}
				</a>
			) : (
				<>{image}</>
			)}
		</div>
	);
};

export default InlineImage;
