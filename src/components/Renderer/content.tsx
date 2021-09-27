import mediumZoom from 'medium-zoom';
import React, { forwardRef, useEffect } from 'react';
import {
	addFileExtension, extractImageMetadataFromFileID, isFileAPI
} from '../../lib/file_metadata';
import { slugifyContent } from '../../lib/string';
import { CoverMediaType } from '../../lib/types/content';
import Image from '../Image';
import { Document } from './';
import { Source } from './file';

import type { ICoverMedia } from '../../lib/types/content';

const ImageMedia = ({
	src,
	title = '',
	zoomable = false,
	blurhash,
}: {
	src?: string;
	title?: string;
	zoomable?: boolean;
	blurhash?: string;
}) => {
	const { size, blurhash: _blurhash } = extractImageMetadataFromFileID(src ?? '');

	useEffect(() => {
		if (typeof window !== 'undefined') {
			mediumZoom('.medium-zoom-cover');
		}
	}, []);

	return (
		<div className="Pinpoint image">
			<Image
				src={src}
				alt={title}
				className={`${zoomable ? 'medium-zoom-cover' : ''}`}
				width={size?.width}
				height={size?.height}
				blurhash={blurhash ?? _blurhash}
				lazy={false}
			/>
		</div>
	);
};

const VideoMedia = ({ src, type, poster }: { src: string; type: string; poster?: string }) => {
	const _isFileAPI = isFileAPI(src);
	return (
		<div className="Pinpoint video">
			<video controls poster={poster}>
				<Source current={type} src={_isFileAPI ? addFileExtension(src, 'webm') : src} type="video/webm" />
				<Source current={type} src={_isFileAPI ? addFileExtension(src, 'ogg') : src} type="video/ogg" />
				<Source current={type} src={_isFileAPI ? addFileExtension(src, 'mp4') : src} type="video/mp4" />
				{type !== 'video/webm' && type !== 'video/ogg' && type !== 'video/mp4' && <source src={src} type={type} />}
			</video>
		</div>
	);
};

const YoutubeMedia = ({ id, metadata }: { id: string; metadata?: Record<string, any> }) => {
	const posterUrl = `https://i.ytimg.com/vi/${id}/${metadata?.poster ?? 'hqdefault'}.jpg`;
	const { size } = extractImageMetadataFromFileID(posterUrl);
	return (
		<div className="Pinpoint youtube">
			<div
				className="yt"
				style={{
					backgroundImage: `url("${posterUrl}")`,
					backgroundSize: size?.width && size?.height ? `${size.width}px ${size.height}px` : undefined,
				}}
				data-url={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1`}
			>
				<button className="play-button" aria-label="Play the Video" />
			</div>
		</div>
	);
};

export const CoverMedia = ({ media, title, zoomable }: { media?: ICoverMedia; title?: string; zoomable?: boolean }) => {
	if (!media) {
		return <></>;
	}
	let content: React.ReactNode = null;
	switch (media.type) {
		case CoverMediaType.None: {
			return <></>;
		}
		case CoverMediaType.Image: {
			content = (
				<ImageMedia
					src={media.value || media.placeholderImage}
					title={title}
					zoomable={zoomable}
					blurhash={media?.blurhash}
				/>
			);
			break;
		}
		case CoverMediaType.Video: {
			content = <VideoMedia src={media.value} type={media.metadata?.mimetype} poster={media.placeholderImage} />;
			break;
		}
		case CoverMediaType.Youtube: {
			content = <YoutubeMedia id={media.value} metadata={media.metadata} />;
			break;
		}
	}
	return (
		<section className="Pinpoint cover covermedia">
			<div className="Pinpoint media-container">{content}</div>
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
}

const Content = forwardRef((props: ContentProps, ref: any) => {
	return (
		<article ref={ref}>
			{props.coverMedia && <CoverMedia media={props.coverMedia} title={props.title} />}
			<section className="Pinpoint content">
				<Document node={props.document} limit={props.limit} />
				{props.limit && props.document.content?.length > props.limit && (
					<div className="Pinpoint continue">
						<a href={slugifyContent(props.id, props.title)}>Continue Reading →</a>
					</div>
				)}
			</section>
			{props.divider && <hr className="Pinpoint divider" />}
		</article>
	);
});

export default Content;
