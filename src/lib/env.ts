export const getEnv = () => {
	let env = process.env.PP_ENV ?? process.env.NEXT_PUBLIC_PP_ENV;
	if (env) {
		return env;
	}
	if (typeof window !== 'undefined') {
		if (window.location?.href?.includes('.edge.') || window.location?.href?.includes('localhost.')) {
			return 'edge';
		}
	}
	return 'stable';
};

export const getAPIUrl = () => (getEnv() === 'edge' ? 'https://api.edge.pinpoint.com' : 'https://api.pinpoint.com');
export const getFileAPIUrl = () =>
	getEnv() === 'edge' ? 'https://file.edge.pinpoint.com' : 'https://file.pinpoint.com';
