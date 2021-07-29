import React from 'react';
import { Meta } from '@storybook/react';
import SocialComponent from '../Instagram';

export default {
	component: SocialComponent,
	title: 'Components/Social/Instagram',
	parameters: {
		jest: ['SocialInstagram.test.tsx'],
	},
} as Meta;

export const Instagram: React.VFC<{}> = () => <SocialComponent href="https://www.instagram.com/pinpoint_sw/" newTab />;
