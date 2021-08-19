const Luxon = require('luxon');

module.exports = async () => {
	console.log('\nsetting up jest...\n');
	console.log('Locale is en-US, time zone is America/Chicago\n');
	Luxon.Settings.defaultLocale = 'en-US';
	Luxon.Settings.defaultZoneName = 'America/Chicago';
	process.env.TZ = 'America/Chicago';
	global.Date.now = () => 1629396899679;
	global.Math.random = () => 0.17291363259385983;
};
