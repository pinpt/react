import * as Exports from '../';
const {
	Statistic,
	Clap,
	Content,
	Changelog,
	ChangelogCard,
	Logo,
	Copyright,
	Subscribe,
	Social,

	emptyDoc,
	getEnv,
	getAPIUrl,
	getFileAPIUrl,
	fetchContent,
	ChangelogMediaType,
	extractFileDataFromFileID,
	extractImageMetadataFromFileID,
	getFileUrl,
	slugifyContent,
	slugifyString,

	...otherExports
} = Exports;

test('Test component exports', () => {
	// Test Statistic Exports
	expect(Statistic).toBeTruthy();
	const { Bar: StatisticBar, Claps, Views, ...otherStatistic } = Statistic;
	expect(StatisticBar).toBeTruthy();
	expect(Claps).toBeTruthy();
	expect(Views).toBeTruthy();
	expect(Object.keys(otherStatistic).length).toEqual(0);

	// Test Changelog Card exports
	expect(ChangelogCard).toBeTruthy();
	const { Title, Description, Container, Date, ReadButton, ...otherChangelogCard } = ChangelogCard;
	expect(Title).toBeTruthy();
	expect(Description).toBeTruthy();
	expect(Container).toBeTruthy();
	expect(Date).toBeTruthy();
	expect(ReadButton).toBeTruthy();
	expect(Object.keys(otherChangelogCard).length).toEqual(0);

	// Test Social exports
	expect(Social).toBeTruthy();
	const { Bar: SocialBar, Facebook, Github, Instagram, LinkedIn, RSS, Twitter, ...otherSocial } = Social;
	expect(SocialBar).toBeTruthy();
	expect(Facebook).toBeTruthy();
	expect(Github).toBeTruthy();
	expect(Instagram).toBeTruthy();
	expect(LinkedIn).toBeTruthy();
	expect(RSS).toBeTruthy();
	expect(Twitter).toBeTruthy();
	expect(Object.keys(otherSocial).length).toEqual(0);

	// Test other component exports
	expect(Clap).toBeTruthy();
	expect(Content).toBeTruthy();
	expect(Changelog).toBeTruthy();
	expect(Logo).toBeTruthy();
	expect(Copyright).toBeTruthy();
	expect(Subscribe).toBeTruthy();
});

test('Test util exports', () => {
	expect(emptyDoc).toBeTruthy();
	expect(getEnv).toBeTruthy();
	expect(getAPIUrl).toBeTruthy();
	expect(getFileAPIUrl).toBeTruthy();
	expect(fetchContent).toBeTruthy();
	expect(ChangelogMediaType).toBeTruthy();
	expect(extractFileDataFromFileID).toBeTruthy();
	expect(extractImageMetadataFromFileID).toBeTruthy();
	expect(getFileUrl).toBeTruthy();
	expect(slugifyContent).toBeTruthy();
	expect(slugifyString).toBeTruthy();
});

test('Test for unexpected exports', () => {
	expect(Object.keys(otherExports).length).toEqual(0);
});
