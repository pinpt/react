import React from 'react';
import { Meta } from '@storybook/react';
import Latest from '../';
import Card from '../../Card';
import DateLabel from '../../DateLabel';
import Statistic from '../../Statistic';

const { default: readme } = require('../README.md');

export default {
	component: Latest,
	title: 'Changelog Components/Latest',
	parameters: {
		jest: ['Latest.test.tsx'],
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
	<Latest>
		<Card.Container
			imageUrl="https://cdn.pinpoint.com/card.png"
			title={<Card.Title title={TEST_TITLE} />}
			date={<DateLabel />}
			description={<Card.Description description={TEST_DESCRIPTION} />}
			statistics={<Statistic.Bar claps={22} views={135} />}
			button={<Card.ReadButton />}
		/>
	</Latest>
);

export const Double: React.VFC<{}> = () => (
	<Latest>
		<Card.Container
			imageUrl="https://cdn.pinpoint.com/card.png"
			title={<Card.Title title={TEST_TITLE} />}
			date={<DateLabel />}
			description={<Card.Description description={TEST_DESCRIPTION} />}
			statistics={<Statistic.Bar claps={22} views={135} />}
			button={<Card.ReadButton />}
		/>
		<Card.Container
			imageUrl="https://cdn.pinpoint.com/card.png"
			title={<Card.Title title={TEST_TITLE} />}
			date={<DateLabel />}
			description={<Card.Description description={TEST_DESCRIPTION} />}
			statistics={<Statistic.Bar claps={22} views={135} />}
			button={<Card.ReadButton />}
		/>
	</Latest>
);

export const Triple: React.VFC<{}> = () => (
	<Latest>
		<Card.Container
			imageUrl="https://cdn.pinpoint.com/card.png"
			title={<Card.Title title={TEST_TITLE} />}
			date={<DateLabel />}
			description={<Card.Description description={TEST_DESCRIPTION} />}
			statistics={<Statistic.Bar claps={22} views={135} />}
			button={<Card.ReadButton />}
		/>
		<Card.Container
			imageUrl="https://cdn.pinpoint.com/card.png"
			title={<Card.Title title={TEST_TITLE} />}
			date={<DateLabel />}
			description={<Card.Description description={TEST_DESCRIPTION} />}
			statistics={<Statistic.Bar claps={22} views={135} />}
			button={<Card.ReadButton />}
		/>
		<Card.Container
			imageUrl="https://cdn.pinpoint.com/card.png"
			title={<Card.Title title={TEST_TITLE} />}
			date={<DateLabel />}
			description={<Card.Description description={TEST_DESCRIPTION} />}
			statistics={<Statistic.Bar claps={22} views={135} />}
			button={<Card.ReadButton />}
		/>
	</Latest>
);

export const Empty: React.VFC<{}> = () => <Latest />;
