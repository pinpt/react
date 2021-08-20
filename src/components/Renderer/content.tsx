import { ReactYouTubeLite as Youtube } from 'react-youtube-lite';
import { slugifyContent } from '../../lib/string';
import { CoverMediaType } from '../../lib/types/content';
import { Document } from './';
import mediumZoom from 'medium-zoom';

import type { ICoverMedia } from '../../lib/types/content';
import { forwardRef, useEffect } from 'react';

const ImageMedia = ({ src, title = '', zoomable = false }: { src: string; title?: string; zoomable?: boolean }) => {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			mediumZoom('.medium-zoom-cover');
		}
	}, []);

	return (
		<div className={`image `}>
			<img src={src} alt={title} className={`${zoomable ? 'medium-zoom-cover' : ''}`} />
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

export const CoverMedia = ({
	media,
	title,
	staticMode,
	zoomable,
}: {
	media?: ICoverMedia;
	title?: string;
	staticMode?: true;
	zoomable?: boolean;
}) => {
	if (!media) {
		return <></>;
	}
	let content: React.ReactNode = null;
	switch (media.type) {
		case CoverMediaType.None: {
			return <></>;
		}
		case CoverMediaType.Image: {
			content = <ImageMedia src={media.value ?? media.placeholderImage} title={title} zoomable={zoomable} />;
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
	return (
		<section className="cover covermedia">
			<div className="media-container">{content}</div>
		</section>
	);
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

const Content = forwardRef((props: ContentProps, ref: any) => {
	return (
		<article ref={ref}>
			{props.coverMedia && <CoverMedia media={props.coverMedia} title={props.title} staticMode={props.staticMode} />}
			<section className="content">
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
});

export default Content;
