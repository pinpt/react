import renderer from 'react-test-renderer';
import Author from '../../Author';
import Clap from '../../Clap';
import Copyright from '../../Copyright';
import Footer from '../../Footer';
import Header from '../../Header';
import Logo from '../../Logo';
import { Document } from '../../Renderer';
import Sidebar from '../../Sidebar';
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
import Tags from '../../Tags';
import Page from '../Entry';
import testDoc from '../Entry/__data__/testDoc.json';
import testCoverMedia from '../Entry/__data__/testCoverMedia.json';
import DateLabel from '../../DateLabel';
import Pagination from '../../Pagination';
import { ICoverMedia } from '../../../lib/types';

const IMAGE_URL =
	'https://file.pinpoint.com/1fcde4196a4c70a8a86f0ce4af53f2a5;U75%3B-sj_NAoPtDojoij_RdfPRdaxoPfPavaw;320x320.png';
const AVATAR =
	'https://file.pinpoint.com/6cc744395c563f0072b339070aa327f3;UCGt%3D%3DkE~A%3FZJ6%5EhIpS%23o%5BELE3oLT0I%40t7E2;400x400.png?rw=48&rh=48';

test('Test full entry', () => {
	const component = renderer.create(
		<Page
			header={
				<Header
					subscribe={<Subscribe href="https://pinpoint.com" />}
					title="Pinpoint Demo Changelog"
					description="See what's new in the Pinpoint Demo."
				/>
			}
			coverMedia={testCoverMedia as ICoverMedia}
			renderer={<Document node={testDoc} />}
			sidebar={
				<Sidebar
					date={<DateLabel />}
					author={<Author avatarUrl={AVATAR} name="Keegan" />}
					tags={<Tags.Bar tags={['feature', 'improvement', 'mobile']} />}
					clap={<Clap clapCount={22} handleClap={() => console.log('clap')} />}
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

test('Test no footer', () => {
	const component = renderer.create(
		<Page
			header={
				<Header
					subscribe={<Subscribe href="https://pinpoint.com" />}
					title="Pinpoint Demo Changelog"
					description="See what's new in the Pinpoint Demo."
				/>
			}
			coverMedia={testCoverMedia as ICoverMedia}
			renderer={<Document node={testDoc} />}
			sidebar={
				<Sidebar
					author={<Author avatarUrl={AVATAR} name="Keegan" />}
					tags={<Tags.Bar tags={['feature', 'improvement', 'mobile']} />}
					clap={<Clap clapCount={22} handleClap={() => console.log('clap')} />}
				/>
			}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test no sidebar', () => {
	const component = renderer.create(
		<Page
			header={
				<Header
					subscribe={<Subscribe href="https://pinpoint.com" />}
					title="Pinpoint Demo Changelog"
					description="See what's new in the Pinpoint Demo."
				/>
			}
			coverMedia={testCoverMedia as ICoverMedia}
			renderer={<Document node={testDoc} />}
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

test('Test with pagination', () => {
	const component = renderer.create(
		<Page
			header={
				<Header
					subscribe={<Subscribe href="https://pinpoint.com" />}
					title="Pinpoint Demo Changelog"
					description="See what's new in the Pinpoint Demo."
				/>
			}
			coverMedia={testCoverMedia as ICoverMedia}
			renderer={<Document node={testDoc} />}
			sidebar={
				<Sidebar
					date={<DateLabel />}
					author={<Author avatarUrl={AVATAR} name="Keegan" />}
					tags={<Tags.Bar tags={['feature', 'improvement', 'mobile']} />}
					clap={<Clap clapCount={22} handleClap={() => console.log('clap')} />}
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
			pagination={
				<Pagination
					goBackText={<Pagination.GoBackWithArrow text="Previous Entry" />}
					goBack={() => alert('back!')}
					goForwardText={<Pagination.GoForwardWithArrow text="Next Entry" />}
					goForward={() => alert('forward!')}
				/>
			}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Test not zoomable entry', () => {
	const component = renderer.create(
		<Page
			header={
				<Header
					subscribe={<Subscribe href="https://pinpoint.com" />}
					title="Pinpoint Demo Changelog"
					description="See what's new in the Pinpoint Demo."
				/>
			}
			coverMedia={testCoverMedia as ICoverMedia}
			renderer={<Document node={testDoc} />}
			sidebar={
				<Sidebar
					date={<DateLabel />}
					author={<Author avatarUrl={AVATAR} name="Keegan" />}
					tags={<Tags.Bar tags={['feature', 'improvement', 'mobile']} />}
					clap={<Clap clapCount={22} handleClap={() => console.log('clap')} />}
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
			zoomable={false}
		/>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
