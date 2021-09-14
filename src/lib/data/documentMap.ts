import { executeAPI } from '../fetch';
import type { IPinpointConfig } from '../types/config';
import { IDocumentMapNode } from '../types/documentMap';

export const fetchDocumentMap = async (config: IPinpointConfig): Promise<IDocumentMapNode[]> => {
	const { data } = await executeAPI(config, `/site-api/v1/document-map`);
	return data?.map;
};