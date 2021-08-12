import { extractImageMetadataFromFileID } from '../../lib/file_metadata';
import { NodeProps, registerNode } from './register';

const ImageBlock = ({ node }: NodeProps) => {
	const { size } = extractImageMetadataFromFileID(node.attrs.src);
	const scaledWidth = (size?.width ?? 0) * node.attrs.scale;
	const scaledHeight = (size?.height ?? 0) * node.attrs.scale;

	const image = (
		<div className="image">
			<img src={node.attrs.src} width={scaledWidth} height={scaledHeight} alt={node.attrs.alt} />
		</div>
	);

	return (
		<div className={`image_block ${node.attrs.align}`}>
			{node.attrs.href ? (
				<a href={node.attrs.href} target="_blank" rel="noopener noreferrer">
					{image}
				</a>
			) : (
				<>{image}</>
			)}
			{node.attrs.alt && <div className="alt">{node.attrs.alt}</div>}
		</div>
	);
};

registerNode('image_block', (node) => <ImageBlock node={node} />);
