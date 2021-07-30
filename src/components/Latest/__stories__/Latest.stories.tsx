import React from 'react';
import { Meta } from '@storybook/react';
import Latest from '..';
import Card from '../../ChangelogCard';
import Statistic from '../../Statistic';

export default {
	component: Latest,
	title: 'Components/Latest',
	parameters: {
		jest: ['Latest.test.tsx'],
	},
} as Meta;

const TEST_TITLE = 'Test Title';
const TEST_DESCRIPTION = 'Test Description';

export const Single: React.VFC<{}> = () => (
	<Latest>
		<Card.Container
			imageUrl="https://cdn.pinpoint.com/card.png"
			title={<Card.Title title={TEST_TITLE} />}
			date={<Card.Date />}
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
			date={<Card.Date />}
			description={<Card.Description description={TEST_DESCRIPTION} />}
			statistics={<Statistic.Bar claps={22} views={135} />}
			button={<Card.ReadButton />}
		/>
		<Card.Container
			imageUrl="https://cdn.pinpoint.com/card.png"
			title={<Card.Title title={TEST_TITLE} />}
			date={<Card.Date />}
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
			date={<Card.Date />}
			description={<Card.Description description={TEST_DESCRIPTION} />}
			statistics={<Statistic.Bar claps={22} views={135} />}
			button={<Card.ReadButton />}
		/>
		<Card.Container
			imageUrl="https://cdn.pinpoint.com/card.png"
			title={<Card.Title title={TEST_TITLE} />}
			date={<Card.Date />}
			description={<Card.Description description={TEST_DESCRIPTION} />}
			statistics={<Statistic.Bar claps={22} views={135} />}
			button={<Card.ReadButton />}
		/>
		<Card.Container
			imageUrl="https://cdn.pinpoint.com/card.png"
			title={<Card.Title title={TEST_TITLE} />}
			date={<Card.Date />}
			description={<Card.Description description={TEST_DESCRIPTION} />}
			statistics={<Statistic.Bar claps={22} views={135} />}
			button={<Card.ReadButton />}
		/>
	</Latest>
);