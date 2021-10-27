import React from 'react';
import { Meta } from '@storybook/react';
import Card from '..';
import { IContent } from '../../../../lib';
import entries from '../../../Prebuilt/__data__/testEntries.json';
import site from '../../../Prebuilt/__data__/testSite.json';

const { default: readme } = require('../README.md');

export default {
	component: Card,
	title: 'Documentation Components/Card',
	parameters: {
		jest: ['DocumentationCard.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Default: React.VFC<{}> = () => (
	<Card title={entries[0].title} description={entries[0].headline} onCtaClick={() => alert('action!')} />
);
