import React from 'react';

const TypekitPlugin = ({ options }: { options: any }) => {
	const id: string = options.id;
	if (!id || id.includes("'")) {
		return null;
	}
	return <link rel="stylesheet" href={`https://use.typekit.net/${id}.css`}></link>;
};

export default TypekitPlugin;
