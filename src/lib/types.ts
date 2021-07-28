export interface Site {
	id: string;
	slug: string;
	name: string;
	theme: {
		title: string;
		description: string;
		copyright: string;
		logoLink: string;
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

export interface Content {
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
