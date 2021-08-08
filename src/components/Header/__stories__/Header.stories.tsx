import React from 'react';
import { Meta } from '@storybook/react';
import Header from '../';
import ActionLink from '../../Internal/ActionLink';
import Logo from '../../Logo';
import Search from '../../Search';
import Subscribe from '../../Subscribe';
import ThemeToggle from '../../ThemeToggle';

const { default: readme } = require('../README.md');

export default {
	component: Header,
	title: 'Components/Header',
	parameters: {
		jest: ['Header.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const Complete: React.VFC<{}> = () => (
	<Header
		subscribe={<Subscribe href="https://pinpoint.com" />}
		title="Pinpoint Demo Changelog"
		description="See what's new in the Pinpoint Demo."
		themeToggle={<ThemeToggle />}
		search={<Search.Bar />}
		logo={
			<Logo src="https://file.edge.pinpoint.com/7e3ad32160424e35d55a541f8be3dbab;UEB5_%7CbDs%3A%25K%3F%3DNZWDtQyAk8jIs%3AcAX4ovoe;445x252.jpeg" />
		}
	/>
);

export const Empty: React.VFC<{}> = () => <Header />;

export const Theme_Toggle_Only: React.VFC<{}> = () => <Header themeToggle={<ThemeToggle />} />;

export const Title_Only: React.VFC<{}> = () => <Header title="Pinpoint Demo Changelog" />;

export const No_Description: React.VFC<{}> = () => (
	<Header title="Pinpoint Demo Changelog" subscribe={<Subscribe href="https://pinpoint.com" />} />
);

export const LogoWithLink: React.VFC<{}> = () => (
	<Header
		subscribe={<Subscribe href="https://pinpoint.com" />}
		title="Pinpoint Demo Changelog"
		description="See what's new in the Pinpoint Demo."
		themeToggle={<ThemeToggle />}
		search={<Search.Bar />}
		logo={
			<ActionLink href="https://pinpoint.com">
				<Logo src="https://file.edge.pinpoint.com/7e3ad32160424e35d55a541f8be3dbab;UEB5_%7CbDs%3A%25K%3F%3DNZWDtQyAk8jIs%3AcAX4ovoe;445x252.jpeg" />
			</ActionLink>
		}
	/>
);

export const HeaderWithHref: React.VFC<{}> = () => (
	<Header
		title="Pinpoint Demo Changelog"
		description="See what's new in the Pinpoint Demo."
		href="https://pinpoint.com"
	/>
);
