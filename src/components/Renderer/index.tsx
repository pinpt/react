import React, { forwardRef } from 'react';
import Content, { CoverMedia } from './content';
import { DocOpts, NodeProps, recurseIntoChildren } from './register';

const Document = forwardRef(({ node, limit, opts }: NodeProps & { limit?: number; opts?: DocOpts }, ref: any) => {
	return (
		<div ref={ref} className="Pinpoint document">
			{recurseIntoChildren({ ...node, _path: 'doc', _opts: opts }, limit)}
		</div>
	);
});

export const emptyDoc = () => ({ type: 'doc', content: [{ type: 'paragraph', content: [] }] });

export { Document, Content, CoverMedia };
