import React from 'react';
import { Meta } from '@storybook/react';
import Recent from '../';
import Card from '../../Card';
import Statistic from '../../Statistic';

const { default: readme } = require('../README.md');

export default {
	component: Recent,
	title: 'Components/Recent',
	parameters: {
		jest: ['Recent.test.tsx'],
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
	<Recent>
		<Card.Container
			imageUrl="https://cdn.pinpoint.com/card.png"
			title={<Card.Title title={TEST_TITLE} />}
			date={<Card.Date />}
			description={<Card.Description description={TEST_DESCRIPTION} />}
			statistics={<Statistic.Bar claps={22} views={135} />}
			button={<Card.ReadButton />}
		/>
	</Recent>
);

export const Double: React.VFC<{}> = () => (
	<Recent>
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
	</Recent>
);

export const Triple: React.VFC<{}> = () => (
	<Recent>
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
	</Recent>
);

export const Quadruple: React.VFC<{}> = () => (
	<Recent>
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
		<Card.Container
			imageUrl="https://cdn.pinpoint.com/card.png"
			title={<Card.Title title={TEST_TITLE} />}
			date={<Card.Date />}
			description={<Card.Description description={TEST_DESCRIPTION} />}
			statistics={<Statistic.Bar claps={22} views={135} />}
			button={<Card.ReadButton />}
		/>
	</Recent>
);

export const Page_Count: React.VFC<{}> = () => (
	<Recent pageNumber={1} pageCount={2}>
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
	</Recent>
);

export const Empty: React.VFC<{}> = () => <Recent />;
