import React from 'react';
import { Meta } from '@storybook/react';
import Subscribe from '../';

export default {
	component: Subscribe,
	title: 'Components/Subscribe',
	parameters: {
		jest: ['Subscribe.test.tsx'],
	},
} as Meta;

export const Default: React.VFC<{}> = () => <Subscribe />;

export const Link: React.VFC<{}> = () => <Subscribe href="https://pinpoint.com" />;

export const Click_Handler: React.VFC<{}> = () => <Subscribe onClick={() => alert('click!')} />;

export const Custom_Text: React.VFC<{}> = () => <Subscribe text="Subscribe Now!" />;
