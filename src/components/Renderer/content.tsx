import { ReactYouTubeLite as Youtube } from 'react-youtube-lite';
import { slugifyContent } from '../../lib/string';
import { CoverMediaType } from '../../lib/types/content';
import { Document } from './';

import type { ICoverMedia } from '../../lib/types/content';

const ImageMedia = ({ src, title = '' }: { src: string; title?: string }) => {
	return (
		<div className="image">
			<img src={src} alt={title} />
		</div>
	);
};

const VideoMedia = ({ src }: { src: string }) => {
	return (
		<div className="video">
			<video controls src={src} />
		</div>
	);
};

const YoutubeMediaSSR = ({ id, poster = 'hqdefault' }: { id: string; poster?: string }) => {
	// the component isn't SSR friendly so this is basically used to sort of mimic it for generated code
	const posterUrl = `https://i.ytimg.com/vi/${id}/${poster}.jpg`;
	return (
		<>
			{poster && <link rel="preload" href={posterUrl} as="image" />}
			<div
				className="youtube ryt-lite embed-responsive aspect-ratio-16/9"
				style={{ backgroundImage: `url(${posterUrl})` }}
			>
				<div className="lty-playbtn" data-url={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`} />
			</div>
		</>
	);
};

const YoutubeMedia = ({
	id,
	metadata,
	staticMode,
}: {
	id: string;
	metadata?: Record<string, any>;
	staticMode?: true;
}) => {
	return (
		<div className="youtube">
			{!staticMode ? (
				<Youtube url={`https://www.youtube.com/watch?v=${id}`} poster={metadata?.poster} />
			) : (
				<YoutubeMediaSSR id={id} poster={metadata?.poster} />
			)}
		</div>
	);
};

const Media = ({ media, title, staticMode }: { media?: ICoverMedia; title?: string; staticMode?: true }) => {
	if (!media) {
		return <></>;
	}
	let content: React.ReactNode = null;
	switch (media.type) {
		case CoverMediaType.None: {
			return <></>;
		}
		case CoverMediaType.Image: {
			content = <ImageMedia src={media.value} title={title} />;
			break;
		}
		case CoverMediaType.Video: {
			content = <VideoMedia src={media.value} />;
			break;
		}
		case CoverMediaType.Youtube: {
			content = <YoutubeMedia id={media.value} metadata={media.metadata} staticMode={staticMode} />;
			break;
		}
	}
	return <div className="media-container">{content}</div>;
};

interface ContentProps {
	id: string;
	title?: string;
	document?: any;
	coverMedia?: ICoverMedia;
	limit?: number;
	divider?: boolean;
	staticMode?: true;
}

const Content = (props: ContentProps) => {
	return (
		<article className="changelog notebook-editor read-only">
			{props.coverMedia && (
				<section className="covermedia">
					<Media media={props.coverMedia} title={props.title} staticMode={props.staticMode} />
				</section>
			)}
			<section className="ProseMirror">
				<Document node={props.document} limit={props.limit} />
				{props.limit && props.document.content?.length > props.limit && (
					<div className="continue">
						<a href={slugifyContent(props.id, props.title)}>Continue Reading →</a>
					</div>
				)}
			</section>
			{props.divider && <hr className="divider" />}
		</article>
	);
};

export default Content;
