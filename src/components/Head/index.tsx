import type { ISite, IContent } from '../../lib/types';
import React from 'react';
import config from '../../config';
import SEO from './SEO';

const { iframely } = config;

export interface IHeadProps {
	site: ISite;
	content?: IContent;
	children?: React.ReactChild;
}

const Head = (props: IHeadProps) => {
	const { site, content, children } = props;
	return (
		<>
			<meta charSet="utf-8" />
			<meta httpEquiv="x-ua-compatible" content="ie=edge" />
			<meta name="viewport" content="width=device-width" />
			<script
				src={`${site.basePath !== '/' ? site.url : ''}/a.js`}
				data-site-id={site.id}
				data-id={content?.id}
				async
				defer
			/>
			<meta name="generator" content="pinpoint.com" />
			<SEO site={site} content={content} />
			{children}
		</>
	);
};

export default Head;
