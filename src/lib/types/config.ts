export interface IPinpointConfig {
	slug: string;
	siteId: string;
	apihost?: string;
	apihostParams?: Record<string, string>;
	siteUrl?: string;
	apiKey?: string;
	pageSize: number;
}
