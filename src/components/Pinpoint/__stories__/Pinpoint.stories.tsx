import React from 'react';
import { Meta } from '@storybook/react';
import Pinpoint from '../';
import Loader from '../../Loader';
import entry from '../__data__/testDocumentIFramely.json';
import entryToggle from '../__data__/testDocumentToggle.json';
import { Document, Content } from '../../Renderer';
import { CoverMediaType } from '../../../lib/types/content';
import Head from '../../Head';
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

export const Test_Widgets: React.VFC<{}> = () => (
	<Pinpoint siteId="0eG8DEulKKdC0HYeNRZT">
		{(ready) => {
			return <div>{ready ? 'scripts ready' : 'scripts loading'}</div>;
		}}
	</Pinpoint>
);
