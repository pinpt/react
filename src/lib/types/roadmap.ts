export interface PublishedRoadmapResponse {
	success: boolean;
	exists: boolean;
	columns?: any[];
	board: any;
	publishedBy: Omit<any, 'id'>;
}
