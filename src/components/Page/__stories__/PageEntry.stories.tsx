import React from 'react';
import { Meta } from '@storybook/react';
import Entry from '../Entry';
import { Content } from '../../Renderer';
import Subscribe from '../../Subscribe';
import Header from '../../Header';
import testDoc from '../Entry/__data__/testDoc.json';
const { default: readme } = require('../Entry/README.md');

export default {
	component: Entry,
	title: 'Components/Page/Entry',
	parameters: {
		jest: ['PageEntry.test.tsx'],
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
			header={
				<Header
					subscribe={<Subscribe href="https://pinpoint.com" />}
					title="Pinpoint Demo Changelog"
					description="See what's new in the Pinpoint Demo."
				/>
			}
			renderer={<Content node={testDoc} />}
		/>
	);
};
