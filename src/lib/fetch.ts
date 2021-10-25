import debuglog from 'debug';
import fetch from 'isomorphic-unfetch';
import sleep from './sleep';
import type { IPinpointConfig } from './types';

const debug = debuglog('pinpoint:fetch');

class FetchError extends Error {
	public code: number;
	public headers: any;
	public url: string;
	constructor(msg: any, code: number, headers: any, url: string) {
		super(msg);
		this.code = code;
		this.headers = headers;
		this.url = url;
	}
}

const getBaseURL = (config: Omit<IPinpointConfig, 'pageSize'>) => {
	// server side
	if (typeof window === 'undefined') {
		if (config.apihost?.includes('.edge.')) {
			return `https://${config.slug}.edge.changelog.so`;
		}
		return `https://${config.slug}.changelog.so`;
	}
	// client side, relative to the window origin
	return config.siteUrl || window.location.origin;
};

const retryOn = [429, 502, 503, 504];
const maxAttempts = 5;
const backoff = 250;

export const executeAPI = async (
	config: Omit<IPinpointConfig, 'pageSize'>,
	relpath: string,
	method = 'GET',
	data?: any,
	cors?: boolean,
	attempt = 1
): Promise<any> => {
	const headers: any = {};
	if (data) {
		headers['Content-Type'] = 'application/json';
	}
	if (config.apiKey) {
		headers.Authorization = `Bearer ${config.apiKey}`;
	}
	let url = getBaseURL(config) + relpath;
	if (config.apihostParams) {
		url +=
			'?' +
			Object.keys(config.apihostParams)
				.map((key) => `${key}=${encodeURIComponent(config.apihostParams![key])}`)
				.join('&');
	}
	debug('fetching %s', url);
	const res = await fetch(url, {
		method,
		headers,
		body: data ? JSON.stringify(data) : undefined,
		credentials: cors ? 'include' : undefined,
	});
	if (res.ok) {
		const resdata = await res.json();
		debug('fetched %j (%s)', resdata, url);
		const { success, ...rest } = resdata;
		if (resdata.success) {
			return rest;
		}
		throw new FetchError(resdata.message, res.status, res.headers, url);
	}
	debug('fetched error %d (%s)', res.status, url);
	if (attempt <= maxAttempts && retryOn.includes(res.status) && method === 'GET') {
		const delay = Math.max(backoff, Math.random() * attempt * backoff);
		debug(
			'retryable error status code = %d (%s), will attempt (%d/%d) again after %d ms...',
			res.status,
			url,
			attempt,
			maxAttempts,
			delay
		);
		return sleep(delay).then(() => {
			return executeAPI(config, relpath, method, data, cors, attempt + 1);
		});
	}
	let message = '';
	switch (res.status) {
		case 400: {
			message = 'Bad Request';
			break;
		}
		case 401: {
			message = 'Unauthorized';
			break;
		}
		case 404: {
			message = 'Not Found';
			break;
		}
		case 500: {
			message = 'Internal Server Error';
			break;
		}
		default: {
			message = `Unexpected Error (${res.status})`;
			break;
		}
	}
	throw new FetchError(message, res.status, res.headers, url);
};
