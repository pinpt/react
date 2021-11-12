export type TagMapping = Record<string, { color: string; border: string; backgroundColor: string }>;

export interface ISite {
	id: string;
	logoUrl?: string;
	mailingAddress?: string;
	url: string; // the canonical url for the site
	slug: string;
	name: string;
	private: boolean; // true if private and should not be indexable by search engines
	type: string; // 'changelog' | 'blog' | 'documentation';
	theme?: {
		title?: string;
		social?: Record<string, string>;
		description?: string;
		logoLink?: string;
		copyright?: string;
		eulaLink?: string;
		privacyLink?: string;
		tosLink?: string;
		homepage?: {
			tags?: string[];
		};
	};
	scriptPlugins?: Record<string, any>;
	tagMapping?: TagMapping;
	basePath: string;
	features: {
		feedback: boolean;
		roadmap: boolean;
	};
}
