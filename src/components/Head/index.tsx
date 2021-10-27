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

const functionToString = (func: Function) => {
	// poormans minify
	return func
		.toString()
		.replace(/[\n\t]/g, '')
		.replace(/[\s]{2,}/g, ' ')
		.replace(/;\s/g, ';')
		.replace(/if\s\(/g, 'if(')
		.replace(/\s{\s/g, '{')
		.replace(/\s}\s/g, '}')
		.replace(/}\s/g, '}')
		.replace(/=\s/g, '=')
		.replace(/\s=/g, '=');
};

const InlineScript = ({ children }: { children: Function }) => (
	<script
		dangerouslySetInnerHTML={{
			__html: `(${functionToString(children)})();`,
		}}
	/> // eslint-disable-line
);

const Head = (props: IHeadProps) => {
	const { site, content, children } = props;
	return (
		<>
			<meta charSet="utf-8" />
			<link rel="preconnect" href="https://site-cdn.pinpoint.com" />
			<link rel="preconnect" href="https://file.pinpoint.com" />
			<meta httpEquiv="x-ua-compatible" content="ie=edge" />
			<meta name="viewport" content="width=device-width" />
			{/* Set the theme while parsing so that we dont have a flash for the theme */}
			<InlineScript>
				{() => {
					const element = document.documentElement;
					const localTheme = window.localStorage.getItem('theme');
					if (localTheme === 'dark') {
						element.classList.add('dark');
					}
				}}
			</InlineScript>
			<script
				src={getSiteAnalyticsURL(site)}
				data-site-id={site.id}
				data-id={content?.id}
				data-base-path={site.basePath}
				data-use-react
				async
				defer
			/>
			{site.scriptPlugins ? <ScriptPlugins plugins={site.scriptPlugins} /> : null}
			<meta name="generator" content="pinpoint.com" />
			<SEO site={site} content={content} />
			{children}
		</>
	);
};

export default Head;
