export interface Site {
	id: string;
	logoUrl?: string;
	mailingAddress?: string;
	slug: string;
	name: string;
	theme: {
		title: string;
		tosLink?: string;
		social?: Record<string, string>;
		description: string;
		copyright: string;
		logoLink: string;
		generatorVersion?: string;
		eulaLink?: string;
	};
}

export enum ChangelogMediaType {
	None = 'none',
	Video = 'video',
	Image = 'image',
	Youtube = 'youtube',
}

export interface ChangelogCoverMedia {
	type: ChangelogMediaType;
	value: string;
	metadata?: Record<string, any>;
}

export interface Entry {
	id: string;
	content: any;
	url: string;
	publishedAt: number;
	tags?: string[];
	title: string;
	headline: string;
	authors: {
		id: string;
		firstName: string;
		lastName: string;
		avatarUrl?: string;
	}[];
	cover_image?: string;
	coverMedia?: ChangelogCoverMedia;
	site: Site;
}

export interface SearchTerm {
	value: string;
	type: 'text' | 'tag';
}

export type Analytics = Record<string, { claps: number; pageviews: number }>;
