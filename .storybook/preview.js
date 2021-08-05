import '../base.css';
import '../defaultTheme.css';
import '../entry.css';
import './storybookOnly.css';

import { addDecorator } from '@storybook/react'; // <- or your view layer
import { withTests } from '@storybook/addon-jest';
import results from '../.jest-test-results.json';

addDecorator(
	withTests({
		results,
	})
);

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
