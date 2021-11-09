import React from 'react';

const TypekitPlugin = ({ options }: { options: any }) => {
	const id: string = options.id;
	if (!id || id.includes("'")) {
		return null;
	}
	// https://helpx.adobe.com/fonts/using/embed-codes.html#Changingtheembedcodeinawebsite
	return <link rel="stylesheet" href={`https://use.typekit.net/${id}.css`}></link>;
	// return <script src={`https://use.typekit.net/${id}.js`} type="text/javascript" defer></script>;
};

export default TypekitPlugin;
