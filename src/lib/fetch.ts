import fetch from 'isomorphic-unfetch';

import type { IPinpointConfig } from './types';

class FetchError extends Error {
	public code: number;
	public headers: any;
	constructor(msg, code, headers) {
		super(msg);
		this.code = code;
		this.headers = headers;
	}
}

const getBaseURL = (config: IPinpointConfig) => {
	// server side
	if (typeof window === 'undefined') {
		if (config.apihost?.includes('.edge.')) {
			return `https://${config.slug}.edge.changelog.so`;
		}
		return `https://${config.slug}.changelog.so`;
	}
	// client side, relative to the window origin
	return window.location.origin;
};

export const executeAPI = async (config: IPinpointConfig, relpath: string, method = 'GET', data?: any) => {
	const headers: any = {};
	if (data) {
		headers['Content-Type'] = 'application/json';
	}
	const u = new URL(getBaseURL(config));
	u.pathname = relpath;
	const res = await fetch(u.toString(), {
		method,
		headers,
		body: data ? JSON.stringify(data) : undefined,
	});
	if (res.ok) {
		const resdata = await res.json();
		const { success, ...rest } = resdata;
		if (resdata.success) {
			return rest;
		}
		throw new FetchError(resdata.message, res.status, res.headers);
	}
	throw new FetchError('internal server error', res.status, res.headers);
};
