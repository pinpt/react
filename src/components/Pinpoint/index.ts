import React, { ReactElement } from 'react';
import useScriptLoader from '../../lib/hooks/useScriptLoader';

export interface IPinpointProps {
	siteId: string;
	children: (ready: boolean) => ReactElement;
}

const Pinpoint = (props: IPinpointProps) => {
	const [ready] = useScriptLoader([
		`https://cdn.iframe.ly/embed.js?api_key=ab49ad398c6f631ab44eca&origin=${props.siteId}`,
	]);

	return props.children(ready);
};

export default Pinpoint;
