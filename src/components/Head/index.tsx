import React from 'react';
import { getSiteAnalyticsURL } from '../../lib/router';
import { IContent } from '../../lib/types/content';
import { ISite } from '../../lib/types/site';
import SEO from './SEO';
import ScriptPlugins from './ScriptPlugins';

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
			<link rel="preconnect" href="https://site-cdn.pinpoint.com" />
			<link rel="preconnect" href="https://file.pinpoint.com" />
			<meta httpEquiv="x-ua-compatible" content="ie=edge" />
			<meta name="viewport" content="width=device-width" />
			<script
				src={getSiteAnalyticsURL(site)}
				data-site-id={site.id}
				data-id={content?.id}
				data-base-path={site.basePath}
				data-use-react
			/>
			{site.scriptPlugins ? <ScriptPlugins plugins={site.scriptPlugins} /> : null}
			<meta name="generator" content="pinpoint.com" />
			<SEO site={site} content={content} />
			{children}
		</>
	);
};

export default Head;
