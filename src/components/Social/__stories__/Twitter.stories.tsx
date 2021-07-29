import React from 'react';
import { Meta } from '@storybook/react';
import SocialComponent from '../Twitter';

export default {
	component: SocialComponent,
	title: 'Components/Social/Twitter',
	parameters: {
		jest: ['SocialTwitter.test.tsx'],
	},
} as Meta;

export const Twitter: React.VFC<{}> = () => <SocialComponent href="https://twitter.com/pinpoint_sw" newTab />;
