import { Meta } from '@storybook/react';
import Error from '..';
import Logo from '../../Logo';

const { default: readme } = require('../README.md');

export default {
	component: Error,
	title: 'Changelog Components/Error',
	parameters: {
		jest: ['Error.test.tsx'],
		controls: { hideNoControlsWarning: true },
		docs: {
			description: {
				component: readme,
			},
		},
	},
} as Meta;

const logo = (
	<Logo src="https://file.edge.pinpoint.com/7e3ad32160424e35d55a541f8be3dbab;UEB5_%7CbDs%3A%25K%3F%3DNZWDtQyAk8jIs%3AcAX4ovoe;445x252.jpeg" />
);

export const Default: React.VFC<{}> = () => <Error logo={logo} />;

export const Not_Found: React.VFC<{}> = () => (
	<Error
		logo={logo}
		error="404 Error"
		title="Page Not Found"
		description="Sorry, we couldn’t find the page you’re looking for."
	/>
);

export const Internal_Server_Error: React.VFC<{}> = () => (
	<Error logo={logo} error="500 Error" title="Internal Server Error" />
);

export const Include_Link_Href: React.VFC<{}> = () => <Error logo={logo} href="/" />;

export const Include_Link_OnClick: React.VFC<{}> = () => <Error logo={logo} onClick={() => alert('Go to all posts')} />;

export const Custom_Link: React.VFC<{}> = () => (
	<Error logo={logo} link={<a href="https://www.google.com/search?q=help">Ask Google for help</a>} />
);
