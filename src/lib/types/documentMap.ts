export interface IDocumentMapDocumentRef {
	type: 'document';
	id: string;
	index: number;
};

export interface IDocumentMapGroup {
	type: 'group';
	id: string;
	index: number;
	name: string;
	slug?: string;
	children?: IDocumentMapNode[];
};

export type IDocumentMapNode = IDocumentMapGroup | IDocumentMapDocumentRef;
