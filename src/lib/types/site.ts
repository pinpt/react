export interface ISite {
	id: string;
	logoUrl?: string;
	mailingAddress?: string;
	url: string; // the canonical url for the site
	slug: string;
	name: string;
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
}
