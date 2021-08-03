import React from 'react';
import { Meta } from '@storybook/react';
import Entry from '..';
import { Content } from '../../Renderer';
import Subscribe from '../../Subscribe';
import Header from '../../Header';
import testDoc from '../__data__/testDoc.json';
const { default: readme } = require('../README.md');

export default {
	component: Entry,
	title: 'Components/Entry',
	parameters: {
		jest: ['Entry.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Default: React.VFC<{}> = () => {
	return (
		<Entry
			header={(
				<Header
					subscribe={<Subscribe href="https://pinpoint.com" />}
					title="Pinpoint Demo Changelog"
					description="See what's new in the Pinpoint Demo."
				/>
			)}
			renderer={(
				<Content node={testDoc} />
			)}
		/>
	);	
};
