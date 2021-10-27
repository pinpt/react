import React from 'react';
import { Meta } from '@storybook/react';
import Bar from '../Bar';
import Email from '../Email';
import Facebook from '../Facebook';
import LinkedIn from '../LinkedIn';
import Twitter from '../Twitter';

const { default: readme } = require('../README.md');

export default {
	component: Bar,
	title: 'Changelog Components/Social/Sharing',
	parameters: {
		jest: ['SocialBarSharing.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const All: React.VFC<{}> = () => (
	<Bar>
		<Facebook sharing href="https://www.facebook.com/Pinpoint.Engineering" newTab />
		<Twitter sharing href="https://twitter.com/pinpoint_sw" newTab />
		<LinkedIn sharing href="https://linkedin.com/company/pinpoint-software" newTab />
		<Email sharing href="mailto:hello@pinpoint.com" />
	</Bar>
);

export const Short: React.VFC<{}> = () => (
	<Bar>
		<Twitter sharing href="https://twitter.com/pinpoint_sw" newTab />
		<LinkedIn sharing href="https://linkedin.com/company/pinpoint-software" newTab />
	</Bar>
);

export const Single: React.VFC<{}> = () => (
	<Bar>
		<Twitter sharing href="https://twitter.com/pinpoint_sw" newTab />
	</Bar>
);
