import renderer from 'react-test-renderer';
import Copyright from '../../Copyright';
import Footer from '../../Footer';
import Header from '../../Header';
import Logo from '../../Logo';
import RoadmapCard from '../../RoadmapCard';
import RoadmapSection from '../../RoadmapSection';
import {
	SocialMediaBar,
	FacebookLink,
	InstagramLink,
	TwitterLink,
	GithubLink,
	LinkedInLink,
	RSSLink,
} from '../../SocialMedia';
import Subscribe from '../../Subscribe';
import Roadmap from '../Roadmap';
import roadmap from '../Roadmap/__data__/roadmap.json';

const IMAGE_URL =
	'https://file.pinpoint.com/1fcde4196a4c70a8a86f0ce4af53f2a5;U75%3B-sj_NAoPtDojoij_RdfPRdaxoPfPavaw;320x320.png';

test('Test full page', () => {
	const component = renderer.create(
		<Roadmap
			sections={roadmap.columns?.map((column) => {
				return (
					<RoadmapSection key={column.id} title={column.title} description={column.description}>
						{roadmap.board[column.id].map((item: any) => {
							return (
								<RoadmapCard
									title={item.title}
									description={item.description}
									key={item.id}
									selectedVote={1}
									setSelectedVote={(vote) => console.log(vote)}
									onSubmitNewSubscriber={(email, vote) => console.log(email, vote)}
								>
									{item.children.map((child: any) => {
										return <div key={child.id}>{child.title}</div>;
									})}
								</RoadmapCard>
							);
						})}
					</RoadmapSection>
				);
			})}
			header={
				<Header
					subscribe={<Subscribe href="https://pinpoint.com" />}
					title="Pinpoint Demo Changelog"
					description="See what's new in the Pinpoint Demo."
				/>
			}
			footer={
				<Footer
					social={
						<SocialMediaBar>
							<FacebookLink href="https://www.facebook.com/Pinpoint.Engineering" newTab />
							<InstagramLink href="https://www.instagram.com/pinpoint_sw/" newTab />
							<TwitterLink href="https://twitter.com/pinpoint_sw" newTab />
							<GithubLink href="https://github.com/pinpt" newTab />
							<LinkedInLink href="https://linkedin.com/company/pinpoint-software" newTab />
							<RSSLink href="https://api.pinpoint.com.so/rss/PirxVTE94u3YmGNOySRY" newTab />
						</SocialMediaBar>
					}
					copyright={<Copyright text="2021 by Pinpoint Software, Inc." logo={<Logo src={IMAGE_URL} />} />}
					subscribe={<Subscribe href="https://pinpoint.com" />}
				/>
			}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test full page default closed', () => {
	const component = renderer.create(
		<Roadmap
			sections={roadmap.columns?.map((column) => {
				return (
					<RoadmapSection
						key={column.id}
						title={column.title}
						description={column.description}
						initialOpen={false}
					>
						{roadmap.board[column.id].map((item: any) => {
							return (
								<RoadmapCard
									title={item.title}
									description={item.description}
									key={item.id}
									selectedVote={2}
									setSelectedVote={(vote) => console.log(vote)}
									onSubmitNewSubscriber={(email, vote) => console.log(email, vote)}
								>
									{item.children.map((child: any) => {
										return <div key={child.id}>{child.title}</div>;
									})}
								</RoadmapCard>
							);
						})}
					</RoadmapSection>
				);
			})}
			header={
				<Header
					subscribe={<Subscribe href="https://pinpoint.com" />}
					title="Pinpoint Demo Changelog"
					description="See what's new in the Pinpoint Demo."
				/>
			}
			footer={
				<Footer
					social={
						<SocialMediaBar>
							<FacebookLink href="https://www.facebook.com/Pinpoint.Engineering" newTab />
							<InstagramLink href="https://www.instagram.com/pinpoint_sw/" newTab />
							<TwitterLink href="https://twitter.com/pinpoint_sw" newTab />
							<GithubLink href="https://github.com/pinpt" newTab />
							<LinkedInLink href="https://linkedin.com/company/pinpoint-software" newTab />
							<RSSLink href="https://api.pinpoint.com.so/rss/PirxVTE94u3YmGNOySRY" newTab />
						</SocialMediaBar>
					}
					copyright={<Copyright text="2021 by Pinpoint Software, Inc." logo={<Logo src={IMAGE_URL} />} />}
					subscribe={<Subscribe href="https://pinpoint.com" />}
				/>
			}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test custom className', () => {
	const component = renderer.create(
		<Roadmap
			className="test-custom"
			sections={roadmap.columns?.map((column) => {
				return (
					<RoadmapSection key={column.id} title={column.title} description={column.description}>
						{roadmap.board[column.id].map((item: any) => {
							return (
								<RoadmapCard
									title={item.title}
									description={item.description}
									key={item.id}
									selectedVote={3}
									setSelectedVote={(vote) => console.log(vote)}
									onSubmitNewSubscriber={(email, vote) => console.log(email, vote)}
								>
									{item.children.map((child: any) => {
										return <div key={child.id}>{child.title}</div>;
									})}
								</RoadmapCard>
							);
						})}
					</RoadmapSection>
				);
			})}
			header={
				<Header
					subscribe={<Subscribe href="https://pinpoint.com" />}
					title="Pinpoint Demo Changelog"
					description="See what's new in the Pinpoint Demo."
				/>
			}
			footer={
				<Footer
					social={
						<SocialMediaBar>
							<FacebookLink href="https://www.facebook.com/Pinpoint.Engineering" newTab />
							<InstagramLink href="https://www.instagram.com/pinpoint_sw/" newTab />
							<TwitterLink href="https://twitter.com/pinpoint_sw" newTab />
							<GithubLink href="https://github.com/pinpt" newTab />
							<LinkedInLink href="https://linkedin.com/company/pinpoint-software" newTab />
							<RSSLink href="https://api.pinpoint.com.so/rss/PirxVTE94u3YmGNOySRY" newTab />
						</SocialMediaBar>
					}
					copyright={<Copyright text="2021 by Pinpoint Software, Inc." logo={<Logo src={IMAGE_URL} />} />}
					subscribe={<Subscribe href="https://pinpoint.com" />}
				/>
			}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
