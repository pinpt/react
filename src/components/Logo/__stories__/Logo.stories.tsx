import React from 'react';
import { Meta } from '@storybook/react';
import Logo from '../';
const { default: readme } = require('../README.md');

export default {
	component: Logo,
	title: 'Components/Logo',
	parameters: {
		jest: ['Logo.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
	},
} as Meta;

const IMAGE_URL =
	'https://file.pinpoint.com/1fcde4196a4c70a8a86f0ce4af53f2a5;U75%3B-sj_NAoPtDojoij_RdfPRdaxoPfPavaw;320x320.png';

export const Default: React.VFC<{}> = () => <Logo src={IMAGE_URL} />;

export const Extra_Small: React.VFC<{}> = () => <Logo src={IMAGE_URL} size="xs" />;

export const Small: React.VFC<{}> = () => <Logo src={IMAGE_URL} size="sm" />;

export const Medium: React.VFC<{}> = () => <Logo src={IMAGE_URL} size="md" />;

export const Large: React.VFC<{}> = () => <Logo src={IMAGE_URL} size="lg" />;

export const Extra_Large: React.VFC<{}> = () => <Logo src={IMAGE_URL} size="xl" />;

export const Link: React.VFC<{}> = () => <Logo src={IMAGE_URL} href="https://pinpoint.com" />;

export const Link_New_Tab: React.VFC<{}> = () => <Logo src={IMAGE_URL} href="https://pinpoint.com" newTab />;

export const Click_Handler: React.VFC<{}> = () => <Logo src={IMAGE_URL} onClick={() => alert('clicked!')} />;
