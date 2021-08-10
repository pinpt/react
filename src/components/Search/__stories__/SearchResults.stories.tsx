import React from 'react';
import { Meta } from '@storybook/react';
import Card from '../../Card';
import DateLabel from '../../DateLabel';
import Statistic from '../../Statistic';
import Results from '../Results';

const { default: readme } = require('../Results/README.md');

export default {
	component: Results,
	title: 'Components/Search/Search Results',
	parameters: {
		jest: ['SearchResults.test.tsx'],
		docs: {
			description: {
				component: readme,
			},
		},
		controls: { hideNoControlsWarning: true },
	},
} as Meta;

const TEST_TITLE = 'Test Title';
const TEST_DESCRIPTION = 'Test Description';

export const Single: React.VFC<{}> = () => (
	<Results>
		<Card.Container
			imageUrl="https://cdn.pinpoint.com/card.png"
			title={<Card.Title title={TEST_TITLE} />}
			date={<DateLabel />}
			description={<Card.Description description={TEST_DESCRIPTION} />}
			statistics={<Statistic.Bar claps={22} views={135} />}
			button={<Card.ReadButton />}
		/>
	</Results>
);

export const Empty: React.VFC<{}> = () => <Results />;
