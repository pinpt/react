import { Meta } from '@storybook/react';
import PrebuiltError from '../Error';
import site from '../__data__/testSite.json';

export default {
	component: PrebuiltError.NotFound,
	title: 'Prebuilt Components/Error',
	parameters: {
		// jest: ['PrebuiltEntry.test.tsx'],
		// docs: {
		// 	description: {
		// 		component: readme,
		// 	},
		// },
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

export const NotFound: React.VFC<{}> = () => (
	<PrebuiltError.NotFound
		site={site}
	/>
);

export const InternalServerError: React.VFC<{}> = () => (
	<PrebuiltError.InternalServerError
		site={site}
	/>
);
