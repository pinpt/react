import ErrorPage from '../Error';
import { Meta } from '@storybook/react';
import Copyright from '../../Copyright';
import Logo from '../../Logo';
import Error from '../../Error';
import Footer from '../../Footer';
import Social from '../../Social';
import Subscribe from '../../Subscribe';
const { default: readme } = require('../Error/README.md');

export default {
	component: ErrorPage,
	title: 'Components/Page/Error',
	parameters: {
		jest: ['PageError.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

const IMAGE_URL =
	'https://file.edge.pinpoint.com/7e3ad32160424e35d55a541f8be3dbab;UEB5_%7CbDs%3A%25K%3F%3DNZWDtQyAk8jIs%3AcAX4ovoe;445x252.jpeg';

const footer = (
	<Footer
		social={
			<Social.Bar>
				<Social.Facebook href="https://www.facebook.com/Pinpoint.Engineering" newTab />
				<Social.Instagram href="https://www.instagram.com/pinpoint_sw/" newTab />
				<Social.Twitter href="https://twitter.com/pinpoint_sw" newTab />
				<Social.Github href="https://github.com/pinpt" newTab />
				<Social.LinkedIn href="https://linkedin.com/company/pinpoint-software" newTab />
				<Social.RSS href="https://api.pinpoint.com.so/rss/PirxVTE94u3YmGNOySRY" newTab />
			</Social.Bar>
		}
		copyright={<Copyright text="2021 by Pinpoint Software, Inc." logo={<Logo src={IMAGE_URL} />} />}
		subscribe={<Subscribe href="https://pinpoint.com" />}
	/>
);

const logo = <Logo src={IMAGE_URL} />;

export const Default: React.VFC<{}> = () => <ErrorPage error={<Error logo={logo} href="/" />} footer={footer} />;

export const Not_Found: React.VFC<{}> = () => (
	<ErrorPage
		error={
			<Error
				logo={logo}
				error="404 Error"
				title="Page Not Found"
				description="Sorry, we couldn’t find the page you’re looking for."
				href="/"
			/>
		}
		footer={footer}
	/>
);

export const Internal_Server_Error: React.VFC<{}> = () => (
	<ErrorPage error={<Error logo={logo} error="500 Error" title="Internal Server Error" href="/" />} footer={footer} />
);
