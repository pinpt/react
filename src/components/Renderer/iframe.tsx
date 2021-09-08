import { NodeProps, PmNode, registerNode } from './register';
import React from 'react';
const LargePreview = ({ node }: NodeProps) => {
	if (node.attrs.href) {
		return <a data-iframely-url href={node.attrs.href} className="large"></a>;
	}
	return (
		<a className="large preview">
			<img className="thumbnail" src={node.attrs.thumbnail} />
			<div className="info">
				<div className="site">
					<img className="icon" src={node.attrs.icon} />
					<div className="site-name">{node.attrs.site ?? new URL(node.attrs.href).hostname}</div>
				</div>
				{node.attrs.title && (
					<div className="title">
						<a href={node.attrs.href} className="cursor-pointer link" rel="noopener">
							{node.attrs.title}
						</a>
					</div>
				)}
				{node.attrs.description && <div className="description">{node.attrs.description}</div>}
			</div>
		</a>
	);
};

const SmallPreview = ({ node }: NodeProps) => (
	<div className="preview small">
		<img className="thumbnail" src={node.attrs?.thumbnail} />
		<div className="info">
			<div className="site">
				<img className="icon" src={node.attrs?.icon} />
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

const YouTubePlayer = ({ node, videoId }: { node: PmNode; videoId: string }) => (
	<div
		className="yt"
		style={{ backgroundImage: `url("${node.attrs.thumbnail}")` }}
		data-url={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1`}
	>
		<button className="yt-play-button" />
		{node.attrs.style === 'overlay' && (
			<div className="overlay">
				<div className="info">
					<img className="icon" src={node.attrs.icon} />
					<a className="title link" href={node.attrs.href} target="_blank" rel="noopener noreferrer">
						{node.attrs.title}
					</a>
				</div>
			</div>
		)}
	</div>
);

const Iframe = ({ node }: NodeProps) => {
	const embedStyle = node.attrs?.style;

	let component;
	const matchYouTube = node.attrs.href.match(/(youtube\.com\/watch\?v=|youtu\.be\/)([\w]+)/);
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
registerNode('iframe', (node) => <Iframe node={node} />);
