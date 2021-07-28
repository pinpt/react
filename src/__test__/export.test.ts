import * as Exports from '../';
const { Statistic, Clap, Content, Changelog, ChangelogCard } = Exports;

test('Test exports', () => {
	expect(Statistic).toBeTruthy();
	expect(Statistic.Bar).toBeTruthy();
	expect(Statistic.Claps).toBeTruthy();
	expect(Statistic.Views).toBeTruthy();
	expect(Clap).toBeTruthy();
	expect(Content).toBeTruthy();
	expect(Changelog).toBeTruthy();

	expect(ChangelogCard).toBeTruthy();
	expect(ChangelogCard.Title).toBeTruthy();
	expect(ChangelogCard.Description).toBeTruthy();
});
