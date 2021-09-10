import React from 'react';
import { extractImageMetadataFromFileID } from '../../lib/file_metadata';
import Image from '../Image';
import { NodeProps, PmNode } from './register';

const LargePreview = ({ node }: NodeProps) => {
	if (node.attrs.href) {
		return <a data-iframely-url href={node.attrs.href} title="Cover Image Preview" className="large"></a>;
	}
	const { size: thumbSize } = extractImageMetadataFromFileID(node.attrs.thumbnail);
	const { size: iconSize } = extractImageMetadataFromFileID(node.attrs.icon);
	return (
		<a className="large preview">
			<Image className="thumbnail" src={node.attrs.thumbnail} width={thumbSize?.width} height={thumbSize?.height} />
			<div className="info">
				<div className="site">
					<Image className="icon" src={node.attrs.icon} width={iconSize?.width} height={iconSize?.height} />
					<div className="site-name">{node.attrs.site ?? new URL(node.attrs.href).hostname}</div>
				</div>
				{node.attrs.title && (
					<div className="title">
						<a href={node.attrs.href} title={node.attrs.title} className="cursor-pointer link" rel="noopener">
							{node.attrs.title}
						</a>
					</div>
				)}
				{node.attrs.description && <div className="description">{node.attrs.description}</div>}
			</div>
		</a>
	);
};

const SmallPreview = ({ node }: NodeProps) => {
	const { size: iconSize } = extractImageMetadataFromFileID(node.attrs.icon);
	return (
		<div className="preview small">
			<Image className="thumbnail" src={node.attrs?.thumbnail} />
			<div className="info">
				<div className="site">
					<Image className="icon" src={node.attrs?.icon} width={iconSize?.width} height={iconSize?.height} />
					<div className="site-name">{node.attrs?.site}</div>
				</div>
				<div className="title">
					<a className="cursor-pointer link" href={node.attrs.href}>
						{node.attrs?.title}
					</a>
				</div>
				<div className="description">{node.attrs?.description}</div>
			</div>
		</div>
	);
};

const YouTubePlayer = ({ node, videoId }: { node: PmNode; videoId: string }) => {
	const { size: thumbSize } = extractImageMetadataFromFileID(node.attrs.thumbnail);
	const { size: iconSize } = extractImageMetadataFromFileID(node.attrs.icon);
	return (
		<div
			className="yt"
			style={{
				backgroundImage: `url("${node.attrs.thumbnail}")`,
				backgroundSize:
					thumbSize?.width && thumbSize?.height ? `${thumbSize.width}px ${thumbSize.height}px` : undefined,
			}}
			data-url={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1`}
		>
			<button className="play-button" />
			{node.attrs.style === 'overlay' && (
				<div className="overlay">
					<div className="info">
						<Image className="icon" src={node.attrs.icon} width={iconSize?.width} height={iconSize?.height} />
						<a
							className="title link"
							title="Youtube Play Link"
							href={node.attrs.href}
							target="_blank"
							rel="noopener noreferrer"
						>
							{node.attrs.title}
						</a>
					</div>
				</div>
			)}
		</div>
	);
};

const Iframe = ({ node }: NodeProps) => {
	const embedStyle = node.attrs?.style;

	let component;
	const matchYouTube = node.attrs.href.match(/(youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
	const isYouTube = node.attrs.type === 'youtube' && matchYouTube && matchYouTube[2];
	if (isYouTube && (node.attrs.style === 'large' || node.attrs.style === 'overlay')) {
		component = <YouTubePlayer node={node} videoId={matchYouTube[2]} />;
	} else {
		component = embedStyle === 'small' ? <SmallPreview node={node} /> : <LargePreview node={node} />;
	}

	return (
		<div className={`node iframe ${embedStyle} ${node.attrs?.type}`}>
			<div className="content">{component}</div>
		</div>
	);
};

export default Iframe;
