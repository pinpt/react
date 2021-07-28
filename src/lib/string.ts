import slugify from 'slugify';

export const slugifyString = (val: string) => {
	return slugify(val, { replacement: '-', strict: true, remove: /[*+~.()'"!:@]/g })
		.replace(/-$/, '')
		.replace(/^-/, '');
};

// WARNING only call this when relative to the public domain, not inside the app
export const slugifyContent = (id: string, title?: string) => {
	if (title) {
		const slug = slugifyString(title);
		return `/entry/${id}/${slug}`;
	}
	return `/entry/${id}`;
};
