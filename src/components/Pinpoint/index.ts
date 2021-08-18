import React, { ReactElement, useEffect, useRef, useState } from 'react';
import useScriptLoader from '../../lib/hooks/useScriptLoader';

export interface IPinpointProps {
	siteId: string;
	children: (ready: boolean, ref: any) => ReactElement;
}

const Pinpoint = (props: IPinpointProps) => {
	const ref = useRef<any>();
	const [ready] = useScriptLoader([
		`https://cdn.iframe.ly/embed.js?api_key=ab49ad398c6f631ab44eca&origin=${props.siteId}`,
	]);

	useEffect(() => {
		if (ready && ref.current) {
			(window as any).iframely && (window as any).iframely.load(ref.current);
		}
	}, [ready]);

	return props.children(ready, ref);
};

export default Pinpoint;
