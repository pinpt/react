import { ReactElement, useEffect, useRef } from 'react';
import useScriptLoader from '../../lib/hooks/useScriptLoader';

export interface IPinpointProps {
	siteId: string;
	contentId?: string;
	basePath?: string;
	children: (ready: boolean, ref: any) => ReactElement;
}

declare global {
	interface Window {
		iframely?: {
			load: (elem?: HTMLElement, url?: string) => void;
		};
		Pinpoint: {
			setSiteSettings: (siteId: string, contentId: string, basePath?: string) => void;
			startTracking: (siteId?: string, contentId?: string, basePath?: string) => () => void;
		};
	}
}

const Pinpoint = (props: IPinpointProps) => {
	const { siteId, contentId, basePath } = props;
	const [ready] = useScriptLoader([`https://cdn.iframe.ly/embed.js?api_key=ab49ad398c6f631ab44eca&origin=${siteId}`]);
	const wiredUp = useRef(false);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const clear = window.Pinpoint?.startTracking?.(siteId, contentId, basePath);

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

	// wire up youtube players
	const wireUpYouTubePlayers = () => {
		const wireUpYouTubePlayer = (ytPlayer: Element, playButtonSelector: string, overlaySelector: string) => {
			const playButton = ytPlayer.querySelector(playButtonSelector) as HTMLElement;
			const url = ytPlayer.getAttribute('data-url');
			const overlay = ytPlayer.querySelector(overlaySelector) as HTMLElement;

			if (playButton && url) {
				const play = function () {
					ytPlayer.removeEventListener('click', play);
					const iframe = document.createElement('iframe');
					iframe.className = 'embed-reponsive-item';
					iframe.width = '560';
					iframe.height = '315';
					iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
					iframe.src = url;
					iframe.allowFullscreen = true;
					iframe.title = 'Youtube Video';
					ytPlayer.appendChild(iframe);
					playButton.style.display = 'none';
					if (overlay) {
						overlay.style.display = 'none';
					}
				};
				const warm = function () {
					ytPlayer.removeEventListener('pointerover', warm);
					const link1 = document.createElement('link');
					link1.rel = 'preconnect';
					link1.href = 'https://www.youtube-nocookie.com';
					const link2 = document.createElement('link');
					link2.rel = 'preconnect';
					link2.href = 'https://www.google.com';
					document.body.appendChild(link1);
					document.body.appendChild(link2);
				};
				ytPlayer.removeEventListener('pointerover', warm);
				ytPlayer.addEventListener('pointerover', warm);
				ytPlayer.removeEventListener('click', play);
				ytPlayer.addEventListener('click', play);
			}
		};

		const ytPlayers = document.querySelectorAll('.yt');
		if (ytPlayers && ytPlayers.length) {
			ytPlayers.forEach((ytPlayer) => wireUpYouTubePlayer(ytPlayer, ':scope > .play-button', ':scope > .overlay'));
		}
	};

	const ref = () => {
		if (ready && typeof window !== 'undefined') {
			window.iframely?.load?.();
			if (!wiredUp.current) {
				wiredUp.current = true;
				wireUpYouTubePlayers();
				wireUpToggles();
			}
		}
	};

	return props.children(ready, ref);
};

export default Pinpoint;
