import { Statistic, Clap, Content, Changelog } from '../';

test('Test exports', () => {
	expect(Statistic).toBeTruthy();
	expect(Statistic.Bar).toBeTruthy();
	expect(Statistic.Claps).toBeTruthy();
	expect(Statistic.Views).toBeTruthy();
	expect(Clap).toBeTruthy();
	expect(Content).toBeTruthy();
	expect(Changelog).toBeTruthy();
});