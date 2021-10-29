// <- or your view layer
import { withTests } from '@storybook/addon-jest';
import { addDecorator } from '@storybook/react';
import results from '../.jest-test-results.json';
import '../base.css';
import '../defaultTheme.css';
import '../documentation.css';
import '../entry.css';
import '../src/widgets/Feedback/style.css';
import '../src/widgets/MostRecentPosts/style.css';
import '../src/widgets/NotificationBanner/style.css';
import '../src/widgets/NotificationModal/style.css';
import '../src/widgets/NotificationPopup/style.css';
import '../src/widgets/FeedbackModal/style.css';
import './storybookOnly.css';

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
	viewMode: 'docs',
};
