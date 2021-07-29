import * as Exports from '../';
const {
	Statistic,
	Clap,
	Content,
	Changelog,
	ChangelogCard,
	Logo,
	Copyright,

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
	const { Bar, Claps, Views, ...otherStatistic } = Statistic;
	expect(Bar).toBeTruthy();
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

	// Test other component exports
	expect(Clap).toBeTruthy();
	expect(Content).toBeTruthy();
	expect(Changelog).toBeTruthy();
	expect(Logo).toBeTruthy();
	expect(Copyright).toBeTruthy();
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
