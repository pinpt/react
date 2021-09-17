export interface IDocumentMapDocumentRef {
	type: 'document';
	id: string;
	index: number;
	title: string;
	slug: string;
};

export interface IDocumentMapGroup {
	type: 'group';
	id: string;
	index: number;
	title: string;
	slug?: string;
	children?: IDocumentMapNode[];
};

export type IDocumentMapNode = IDocumentMapGroup | IDocumentMapDocumentRef;
