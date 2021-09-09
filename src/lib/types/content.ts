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

export interface IContent {
	id: string;
	type: ContentTemplateType; // the type of content
	commit: string; // the commit for the content
	document: ContentDocument;
	url: string; // the canonical url to the content
	dateAt: number; // the date used for purposes of sorting
	publishedAt: number;
	tags?: string[];
	title: string;
	headline: string;
	authors: IUser[];
	coverMedia?: ICoverMedia;
	order?: number;
}
