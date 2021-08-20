import { ReactElement } from 'react';
import useScriptLoader from '../../lib/hooks/useScriptLoader';

export interface IPinpointProps {
	siteId: string;
	contentId?: string;
	children: (ready: boolean, ref: any) => ReactElement;
}

declare global {
	interface Window {
		iframely?: {
			load: (elem?: HTMLElement, url?: string) => void;
		};
	}
}

const Pinpoint = (props: IPinpointProps) => {
	const [ready] = useScriptLoader(
		[
			`https://cdn.iframe.ly/embed.js?api_key=ab49ad398c6f631ab44eca&origin=${props.siteId}`,
			{
				src: '/a.js',
				options: {
					'data-site-id': props.siteId,
					'data-id': props.contentId,
				},
			},
		],
		true,
		0,
		[props.siteId, props.contentId]
	);

	const ref = () => {
		if (ready && typeof window !== 'undefined') {
			window.iframely?.load?.();
		}
	};

	return props.children(ready, ref);
};

export default Pinpoint;
