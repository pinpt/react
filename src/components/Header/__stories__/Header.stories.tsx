import React from 'react';
import { Meta } from '@storybook/react';
import Header from '..';
import Subscribe from '../../Subscribe';

export default {
	component: Header,
	title: 'Components/Header',
	parameters: {
		jest: ['Header.test.tsx'],
	},
} as Meta;

export const Complete: React.VFC<{}> = () => (
	<Header
		subscribe={<Subscribe href="https://pinpoint.com" />}
		title="Pinpoint Demo Changelog"
		description="See what's new in the Pinpoint Demo."
	/>
);

export const Empty: React.VFC<{}> = () => <Header />;

export const Title_Only: React.VFC<{}> = () => <Header title="Pinpoint Demo Changelog" />;

export const No_Description: React.VFC<{}> = () => (
	<Header title="Pinpoint Demo Changelog" subscribe={<Subscribe href="https://pinpoint.com" />} />
);
