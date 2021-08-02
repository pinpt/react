import React from 'react';
import { Meta } from '@storybook/react';
import ChangelogContainer from '../Container';
import Title from '../Title';
import Description from '../Description';
import StatisticsBar from '../../Statistic/Bar';
import ChangelogDate from '../Date';
import ChangelogReadButton from '../ReadButton';
const { default: readme } = require('../Container/README.md');

export default {
	component: ChangelogContainer,
	title: 'Components/Changelog Card/Container',
	parameters: {
		jest: ['ChangelogCardContainer.test.tsx'],
		controls: { hideNoControlsWarning: true },
		docs: {
			description: {
				component: readme,
			},
		},
	},
} as Meta;

const TEST_TITLE = 'Test Title';
const TEST_DESCRIPTION = 'Test Description';

export const Full_Card: React.VFC<{}> = () => (
	<ChangelogContainer
		imageUrl="https://cdn.pinpoint.com/card.png"
		title={<Title title={TEST_TITLE} />}
		date={<ChangelogDate />}
		description={<Description description={TEST_DESCRIPTION} />}
		statistics={<StatisticsBar claps={22} views={135} />}
		button={<ChangelogReadButton />}
	/>
);

export const No_Statistics: React.VFC<{}> = () => (
	<ChangelogContainer
		imageUrl="https://cdn.pinpoint.com/card.png"
		title={<Title title={TEST_TITLE} />}
		description={<Description description={TEST_DESCRIPTION} />}
	/>
);

export const No_Title: React.VFC<{}> = () => (
	<ChangelogContainer
		imageUrl="https://cdn.pinpoint.com/card.png"
		description={<Description description={TEST_DESCRIPTION} />}
		statistics={<StatisticsBar claps={22} views={135} />}
	/>
);

export const No_Description: React.VFC<{}> = () => (
	<ChangelogContainer
		imageUrl="https://cdn.pinpoint.com/card.png"
		title={<Title title={TEST_TITLE} />}
		statistics={<StatisticsBar claps={22} views={135} />}
	/>
);

export const No_Image: React.VFC<{}> = () => (
	<ChangelogContainer
		title={<Title title={TEST_TITLE} />}
		description={<Description description={TEST_DESCRIPTION} />}
		statistics={<StatisticsBar claps={22} views={135} />}
	/>
);

export const Multiple_Cards: React.VFC<{}> = () => (
	<div style={{ display: 'flex', columnGap: '20px' }}>
		<ChangelogContainer
			imageUrl="https://cdn.pinpoint.com/card.png"
			title={<Title title={TEST_TITLE} />}
			description={<Description description={TEST_DESCRIPTION} />}
			statistics={<StatisticsBar claps={22} views={135} />}
			button={<ChangelogReadButton />}
		/>
		<ChangelogContainer
			imageUrl="https://cdn.pinpoint.com/card.png"
			title={<Title title={TEST_TITLE} />}
			description={<Description description={TEST_DESCRIPTION} />}
			statistics={<StatisticsBar claps={45} views={235} />}
			button={<ChangelogReadButton />}
		/>
	</div>
);
