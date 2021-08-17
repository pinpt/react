import React from 'react';
import { Meta } from '@storybook/react';
import Pinpoint from '../';
import Loader from '../../Loader';
import entry from '../__data__/testDocumentIFramely.json';
import { Document } from '../../Renderer';
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
			return (
				<div>
					{ready ? 'scripts ready' : 'scripts loading'}
				</div>
			);
		}}
	</Pinpoint>
);

export const Test_Iframely: React.VFC<{}> = () => (
	<Pinpoint siteId="testing">
		{(ready) => {
			if (!ready) {
				return <Loader />;
			}
			return (
				<Document node={entry} />
			);
		}}
	</Pinpoint>
);