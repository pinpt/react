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

	const wireUpToggles = () => {
		const toggles = document.querySelectorAll('.toggle');
		if (toggles && toggles.length) {
			toggles.forEach((toggle) => {
				const content = toggle.querySelector(':scope > .content');
				const options = toggle.querySelector(':scope > .options');
				const icon = options?.querySelector(':scope > .icon > svg');
				const title = options?.querySelector(':scope > .title');
				const expand = function () {
					if (options) {
						options?.removeEventListener('click', expand);
						options?.addEventListener('click', collapse);
					}
					if (icon) {
						(icon as any).style.transform = 'rotate(0deg)';
					}
					if (title) {
						(title as any).style.display = 'none';
					}
					if (content) {
						(content as any).style.display = 'block';
					}
				};
				const collapse = function () {
					if (options) {
						(options as any).removeEventListener('click', collapse);
						(options as any).addEventListener('click', expand);
					}
					if (icon) {
						(icon as any).style.transform = 'rotate(270deg)';
					}
					if (title) {
						(title as any).style.display = 'block';
					}
					if (content) {
						(content as any).style.display = 'none';
					}
				};
				options?.addEventListener('click', collapse);
			});
		}
	};

	const ref = () => {
		if (ready && typeof window !== 'undefined') {
			window.iframely?.load?.();
			wireUpToggles();
		}
	};

	return props.children(ready, ref);
};

export default Pinpoint;
