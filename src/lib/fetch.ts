import fetch from 'isomorphic-unfetch';

let baseURL: string = '';

export const setBaseURL = (base: string) => {
	baseURL = base;
};

class FetchError extends Error {
	public code: number;
	public headers: any;
	constructor(msg, code, headers) {
		super(msg);
		this.code = code;
		this.headers = headers;
	}
}

export const executeAPI = async (relpath: string, method = 'GET', data?: any) => {
	const headers: any = {};
	if (data) {
		headers['Content-Type'] = 'application/json';
	}
	const res = await fetch(baseURL + relpath, {
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
