import React from 'react';
import { Meta } from '@storybook/react';
import SocialComponent from '../Github';

export default {
	component: SocialComponent,
	title: 'Components/Social/Github',
	parameters: {
		jest: ['SocialGithub.test.tsx'],
	},
} as Meta;

export const Github: React.VFC<{}> = () => <SocialComponent href="https://github.com/pinpt" newTab />;
