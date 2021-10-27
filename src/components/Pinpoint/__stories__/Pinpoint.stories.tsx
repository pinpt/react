import React from 'react';
import { Meta } from '@storybook/react';
import Pinpoint from '../';
import { CoverMediaType } from '../../../lib/types/content';
import Loader from '../../Loader';
import { Content, Document } from '../../Renderer';
import entry from '../__data__/testDocumentIFramely.json';
import entryToggle from '../__data__/testDocumentToggle.json';

const { default: readme } = require('../README.md');

export default {
	component: Pinpoint,
	title: 'Changelog Components/Pinpoint',
	parameters: {
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Simple_Test: React.VFC<{}> = () => (
	<Pinpoint siteId="testing">
		{(ready) => {
			return <div>{ready ? 'scripts ready' : 'scripts loading'}</div>;
		}}
	</Pinpoint>
);

export const Test_Iframely: React.VFC<{}> = () => (
	<Pinpoint siteId="testing">
		{(ready, ref) => {
			if (!ready) {
				return <Loader />;
			}
			return <Document ref={ref} node={entry} />;
		}}
	</Pinpoint>
);

export const Test_Iframely_Content: React.VFC<{}> = () => (
	<Pinpoint siteId="testing">
		{(ready, ref) => {
			if (!ready) {
				return <Loader />;
			}
			return <Content ref={ref} document={{ type: 'document', content: entry.content }} id="1234" />;
		}}
	</Pinpoint>
);

export const Test_Toggle_Content: React.VFC<{}> = () => (
	<Pinpoint siteId="testing">
		{(ready, ref) => {
			if (!ready) {
				return <Loader />;
			}
			return <Content ref={ref} document={{ type: 'document', content: entryToggle.content }} id="5678" />;
		}}
	</Pinpoint>
);

export const Test_Youtube: React.VFC<{}> = () => (
	<Pinpoint siteId="testing">
		{(ready, ref) => {
			if (!ready) {
				return <Loader />;
			}
			return (
				<Content
					ref={ref}
					coverMedia={{ type: CoverMediaType.Youtube, value: 'N_gD9-Oa0fg', placeholderImage: '' }}
					document={{
						type: 'document',
						content: [
							{
								type: 'iframe',
								attrs: {
									type: 'youtube',
									style: 'overlay',
									href: 'https://www.youtube.com/watch?v=N_gD9-Oa0fg',
									thumbnail: 'https://i.ytimg.com/vi/N_gD9-Oa0fg/hqdefault.jpg',
									icon:
										'https://yt3.ggpht.com/ytc/AKedOLRCii9uMFeJxNQ1nRcqOkbrzkeygn-N5gWRHVk6ZGQ=s68-c-k-c0x00ffffff-no-rj',
									title: 'No Time to Die',
								},
							},
						],
					}}
					id="5678"
				/>
			);
		}}
	</Pinpoint>
);

export const Test_Widgets: React.VFC<{}> = (a, b) => {
	return (
		<Pinpoint siteId="0eG8DEulKKdC0HYeNRZT">
			{(ready) => {
				return (
					<div>
						{ready ? 'scripts ready' : 'scripts loading'}
						<div className="most-recent-target" />
						<div className="most-recent-target" />
					</div>
				);
			}}
		</Pinpoint>
	);
};

// This is a hack to get the beacon to load in the story. Since it's not loaded in the head before
// the story loads, we need to block all rendering until it finishes loading. In normal use, the
// beacon will be loaded in the document head and won't have this problem.
(Test_Widgets as any).loaders = [
	async () => {
		return {
			ready: await (async () => {
				const res: boolean = await new Promise((resolve) => {
					const head = document.getElementsByTagName('head')?.[0];
					const elem = document.createElement('script');
					elem.src = 'https://keegandonley.edge.changelog.so/a.js';
					elem.setAttribute('data-use-react', 'true');
					elem.setAttribute('data-site-id', '0eG8DEulKKdC0HYeNRZT');
					elem.onload = () => {
						resolve(true);
					};
					// load sync *before* loading the <Pinpoint /> component
					head.appendChild(elem);
				});

				return res;
			})(),
		};
	},
];

export const Test_Delayed_Widgets: React.VFC<{}> = (a, b) => {
	return (
		<Pinpoint siteId="0eG8DEulKKdC0HYeNRZT">
			{(ready) => {
				return (
					<div>
						{ready ? 'scripts ready' : 'scripts loading'}
						<div className="most-recent-target" />
						<div className="most-recent-target" />
					</div>
				);
			}}
		</Pinpoint>
	);
};

// will load the beacon script *after* we load our <Pinpoint /> component is loaded
(Test_Delayed_Widgets as any).loaders = [
	async () => {
		return {
			ready: await (async () => {
				const res: boolean = await new Promise((resolve) => {
					const head = document.getElementsByTagName('head')?.[0];
					const elem = document.createElement('script');
					elem.src = 'https://keegandonley.edge.changelog.so/a.js';
					elem.setAttribute('data-use-react', 'true');
					elem.setAttribute('data-site-id', '0eG8DEulKKdC0HYeNRZT');
					elem.async = true;
					elem.defer = true;
					setTimeout(() => head.appendChild(elem), Math.max(500, Math.random() * 1_500)); // simulate delay in loading beacon async
					resolve(true);
				});

				return res;
			})(),
		};
	},
];
