export enum CoverMediaType {
	None = 'none',
	Video = 'video',
	Image = 'image',
	Youtube = 'youtube',
}

export interface ICoverMedia {
	type: CoverMediaType;
	placeholderImage: string;
	value: string;
	metadata?: Record<string, any>;
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
	publishedAt: number;
	tags?: string[];
	title: string;
	headline: string;
	authors: IUser[];
	coverMedia?: ICoverMedia;
}
