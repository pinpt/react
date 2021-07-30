import React from 'react';
import { Meta } from '@storybook/react';
import Copyright from '../';
import Logo from '../../Logo';
const { default: readme } = require('../README.md');

export default {
	component: Copyright,
	title: 'Components/Copyright',
	parameters: {
		jest: ['Copyright.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

const IMAGE_URL =
	'https://file.pinpoint.com/1fcde4196a4c70a8a86f0ce4af53f2a5;U75%3B-sj_NAoPtDojoij_RdfPRdaxoPfPavaw;320x320.png';

export const With_Logo: React.VFC<{}> = () => (
	<Copyright text="2021 by Pinpoint Software, Inc." logo={<Logo src={IMAGE_URL} />} />
);

export const Without_Logo: React.VFC<{}> = () => <Copyright text="2021 by Pinpoint Software, Inc." />;
