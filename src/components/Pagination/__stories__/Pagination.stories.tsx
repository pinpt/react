import React from 'react';
import { Meta } from '@storybook/react';
import Pagination from '../';

const { default: readme } = require('../README.md');

export default {
	component: Pagination,
	title: 'Components/Pagination',
	parameters: {
		jest: ['Pagination.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Both_Directions: React.VFC<{}> = () => (
	<Pagination goBack={() => alert('back!')} goForward={() => alert('forward!')} />
);

export const Back_Only: React.VFC<{}> = () => <Pagination goBack={() => alert('back!')} />;

export const Forward_Only: React.VFC<{}> = () => <Pagination goForward={() => alert('forward!')} />;

export const No_Pagination: React.VFC<{}> = () => <Pagination />;

export const Back_WithTextOverride: React.VFC<{}> = () => (
	<Pagination goBack={() => alert('back!')} goBackText={'Go Back Dude!'} />
);

export const Back_WithComponentOverride: React.VFC<{}> = () => (
	<Pagination goBack={() => alert('back!')} goBackText={<Pagination.GoBackWithArrow text="Yeah, back" />} />
);

export const LongTitles: React.VFC<{}> = () => (
	<Pagination
		goBack={() => alert('back!')}
		goBackText="Title Of Previous Entry Which Is A Long One No Longer Than That"
		goForward={() => alert('forward!')}
		goForwardText="Title Of Next Entry Which Is Also A Long One No Longer Than Than"
	/>
);

export const LongTitlesWithArrows: React.VFC<{}> = () => (
	<Pagination
		goBack={() => alert('back!')}
		goBackText={<Pagination.GoBackWithArrow text="Title Of Previous Entry Which Is A Long One No Longer Than That" />}
		goForward={() => alert('forward!')}
		goForwardText={<Pagination.GoForwardWithArrow text="Title Of Next Entry Which Is Also A Long One No Longer Than That" />}
	/>
);