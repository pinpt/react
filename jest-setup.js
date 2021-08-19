const Luxon = require('luxon');

module.exports = async () => {
	console.log('\nsetting up jest...\n');
	console.log('Locale is en-US, time zone is America/Chicago\n');
	Luxon.Settings.defaultLocale = 'en-US';
	Luxon.Settings.defaultZoneName = 'America/Chicago';
	process.env.TZ = 'America/Chicago';
};
