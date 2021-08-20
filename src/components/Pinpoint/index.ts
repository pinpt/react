import { ReactElement, useEffect } from 'react';
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
		Pinpoint: {
			setSiteSettings: (siteId: string, contentId: string) => void;
			startTracking: (siteId?: string, contentId?: string) => () => void;
		};
	}
}

const Pinpoint = (props: IPinpointProps) => {
	const { siteId, contentId } = props;
	const [ready] = useScriptLoader([`https://cdn.iframe.ly/embed.js?api_key=ab49ad398c6f631ab44eca&origin=${siteId}`]);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const clear = window.Pinpoint?.startTracking?.(siteId, contentId);

			return () => clear?.();
		}
	}, [siteId, contentId]);

	const ref = () => {
		if (ready && typeof window !== 'undefined') {
			window.iframely?.load?.();
		}
	};

	return props.children(ready, ref);
};

export default Pinpoint;
