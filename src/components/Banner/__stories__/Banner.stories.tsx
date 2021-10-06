import React from 'react';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { Meta } from '@storybook/react';
import Banner from '../';

const { default: readme } = require('../README.md');

export default {
	component: Banner,
	title: 'Changelog Components/Banner',
	parameters: {
		jest: ['Banner.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Default: React.VFC<{}> = () => <Banner />;

export const Message: React.VFC<{}> = () => <Banner message="Hey this is cool" />;

export const MessageAndIcon: React.VFC<{}> = () => <Banner message="Warning, Will Rogers" icon={faExclamationCircle} />;

export const Children: React.VFC<{}> = () => <Banner>Hello World</Banner>;

export const Closeable: React.VFC<{}> = () => <Banner closeable>Hello World</Banner>;

export const Override_Styles: React.VFC<{}> = () => (
	<Banner style={{ backgroundColor: '#900', color: '#fff' }}>Hello World</Banner>
);

export const Close_Callback: React.VFC<{}> = () => (
	<Banner style={{ backgroundColor: '#900', color: '#fff' }} closeable onClose={() => console.error('closed')}>
		Hello World
	</Banner>
);
