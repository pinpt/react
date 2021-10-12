export enum CoverMediaType {
	None = 'none',
	Video = 'video',
	Image = 'image',
	Youtube = 'youtube',
}

export interface CoverMediaProperties {
	title?: {
		text: string;
		size: number;
		foreground: string;
		background: string;
		radius: number;
		font?: {
			family: string;
			weight?: number;
		};
	};
	background?: {
		src?: string;
		inset: number;
		radius: number;
		color?: string;
		gradient?: string;
		fit: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
	};
	metadata?: {
		mimetype: string;
		width?: number;
		height?: number;
		size?: number;
		duration?: number;
	};
}

export interface ICoverMedia {
	type: CoverMediaType;
	placeholderImage?: string;
	value: string;
	metadata?: Record<string, any>;
	publicUrl?: string;
	properties?: CoverMediaProperties;
	blurhash?: string;
}

export enum ContentTemplateType {
	Changelog = 'changelog',
}

type ContentDocument = any;

export interface IUser {
	id: string;
	firstName: string;
	lastName: string;
	avatarUrl?: string;
}

export interface StyledTag {
	name: string;
	style: {
		color: string;
		backgroundColor: string;
		border: string;
	};
}

export interface IContent {
	id: string;
	slug?: string;
	type: ContentTemplateType; // the type of content
	commit: string; // the commit for the content
	document: ContentDocument;
	url: string; // the canonical url to the content
	dateAt: number; // the date used for purposes of sorting
	publishedAt: number;
	/**
	 * @deprecated tags are deprecated, use styledTags instead
	 */
	tags?: string[];
	styledTags?: StyledTag[];
	title: string;
	headline: string;
	authors: IUser[];
	coverMedia?: ICoverMedia;
	order?: number;
	robots?: 'visible' | 'invisible'; // the robots setting for the page
}
