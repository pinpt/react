import type { ISite, IContent } from '../../lib/types';
import React from 'react';
import { getSiteAnalyticsURL } from '../../lib/router';
import ScriptPlugins from './ScriptPlugins';
import SEO from './SEO';

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
