import React from 'react';
import { Meta } from '@storybook/react';
import Pinpoint from '../';
import Loader from '../../Loader';
import entry from '../__data__/testDocumentIFramely.json';
import entryToggle from '../__data__/testDocumentToggle.json';
import { Document, Content } from '../../Renderer';
const { default: readme } = require('../README.md');

export default {
	component: Pinpoint,
	title: 'Components/Pinpoint',
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
