import { extractImageMetadataFromFileID } from '../../lib/file_metadata';
import { NodeProps, registerNode } from './register';

const ImageBlock = ({ node }: NodeProps) => {
	const { size } = extractImageMetadataFromFileID(node.attrs.src);
	const scaledWidth = size?.width ?? 0 * node.attrs.scale;
	const scaledHeight = size?.height ?? 0 * node.attrs.scale;

	const image = (
		<div
			className={`image_block flex ${
				node.attrs.align === 'center'
					? 'justify-center'
					: node.attrs.align === 'right'
					? 'justify-end'
					: 'justify-start'
			}`}
		>
			<img src={node.attrs.src} width={scaledWidth} height={scaledHeight} alt={node.attrs.alt} />
		</div>
	);

	return (
		<div>
			{node.attrs.href ? (
				<a href={node.attrs.href} target="_blank" rel="noopener noreferrer">
					{image}
				</a>
			) : (
				<>{image}</>
			)}
			{node.attrs.alt && <div className="text-center italic text-gray-400">{node.attrs.alt}</div>}
		</div>
	);
};

registerNode('image_block', (node) => <ImageBlock node={node} />);
