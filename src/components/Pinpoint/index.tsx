import React, { cloneElement, ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import { render } from 'react-dom';
import useScriptLoader from '../../lib/hooks/useScriptLoader';
import MostRecentPosts from '../../widgets/MostRecentPosts';
import NotificationBanner from '../../widgets/NotificationBanner';
import NotificationModal from '../../widgets/NotificationModal';
import NotificationPopup from '../../widgets/NotificationPopup';

export interface IPinpointProps {
	siteId: string;
	contentId?: string;
	basePath?: string;
	children: (ready: boolean, ref: any) => ReactElement;
	noIFramely?: boolean;
	renderNotificationBannerWidget?: (widget: any) => ReactElement;
	renderNotificationPopupWidget?: (widget: any) => ReactElement;
	renderNoficiationModalWidget?: (widget: any) => ReactElement;
	renderMostRecentPostsWidget?: (widget: any) => ReactElement;
}

type CustomPropertyType = string | number | boolean;

export interface IdentifyData {
	user: {
		id: string;
		email: string;
		firstName?: string;
		lastName?: string;
		avatarUrl?: string;
	};
	custom_properties?: Record<string, CustomPropertyType>;
}
export interface PinpointSettings extends IdentifyData {
	siteId?: string;
	contentId?: string;
	basePath?: string;

	pageViews?: false;
	trackLinks?: false;
	widgets?: false;
	onLoad?: () => void;
}

declare global {
	interface Window {
		iframely?: {
			load: (elem?: HTMLElement, url?: string) => void;
		};
		Pinpoint: {
			setSiteSettings: (siteId: string, contentId: string, basePath?: string) => void;
			startTracking: (siteId?: string, contentId?: string, basePath?: string) => () => void;
			identify: (identityData: IdentifyData) => void;
			registerSDKForWidget: (cb: (res: any[]) => void) => () => void;
		};
		__Pinpoint: {
			load: () => void;
		};
		PinpointSettings: PinpointSettings;
	}
}

const USE_SDK_FOR_WIDGETS =
	typeof localStorage === 'undefined' ? false : localStorage.getItem('pinpoint.react.widgets') === 'true';
const DEBUG_MODE =
	typeof localStorage === 'undefined' ? false : localStorage.getItem('pinpoint.beacon.debug') === 'true';

const debug = (...args: any) => {
	if (DEBUG_MODE) {
		console.debug('[@pinpt/react]', ...args);
	}
};

const Pinpoint = (props: IPinpointProps) => {
	const {
		siteId,
		contentId,
		basePath,
		noIFramely,
		renderMostRecentPostsWidget,
		renderNoficiationModalWidget,
		renderNotificationBannerWidget,
		renderNotificationPopupWidget,
	} = props;
	const [ready] = useScriptLoader(
		noIFramely ? [] : [`https://cdn.iframe.ly/embed.js?api_key=ab49ad398c6f631ab44eca&origin=${siteId}`]
	);
	const [widgets, setWidgets] = useState<any[]>([]);
	const wiredUp = useRef(false);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			debug('Pinpoint complete is running init useEffect');
			let clearSDK: () => void;
			if (USE_SDK_FOR_WIDGETS) {
				window.PinpointSettings = {
					...(window.PinpointSettings ?? {}),
					onLoad: () => {
						debug('Beacon called onload');
						clearSDK = window.Pinpoint?.registerSDKForWidget?.((res) => {
							debug('Got widgets from beacon', res);
							setWidgets(res);
						});
					},
				};
			}
			let clearTracking: () => void;
			// check to see if we've loaded the beacon
			if (typeof window.__Pinpoint?.load === 'function') {
				debug('Beacon is already loaded', { siteId, contentId, basePath });
				window.__Pinpoint.load();
				clearTracking = window.Pinpoint?.startTracking?.(siteId, contentId, basePath);
			} else {
				// if not, register a callback to be called when it's loaded
				debug('Beacon is not yet loaded, registering a callback');
				window.__Pinpoint = window.__Pinpoint ?? {};
				const wp = window.__Pinpoint as any;
				wp.onload = () => {
					debug('Beacon is now loaded', { siteId, contentId, basePath });
					window.__Pinpoint.load();
					clearTracking = window.Pinpoint?.startTracking?.(siteId, contentId, basePath);
				};
			}

			return () => {
				debug('Pinpoint component is unloaded');
				clearTracking?.();
				clearSDK?.();
			};
		}
	}, [siteId, contentId, basePath]);

	const buildComponentRenderer = useCallback(
		(component: ReactElement, elemId: string, target: { selector: string; action: string }, cb: () => void) => {
			const result = cloneElement(component, {
				onClose: cb,
			});
			if (target.selector === 'body') {
				const container = document.createElement('div');
				container.id = elemId;
				if (target.action === 'prepend') {
					document.body.prepend(container);
				} else {
					document.body.append(container);
				}

				render(result, container);
				return [{ container, remove: true }];
			} else {
				const res = [] as any[];
				const containers = document.querySelectorAll(target.selector);
				containers.forEach((container) => {
					if (container) {
						render(result, container);
					} else {
						debug('Container not found, skipping render', target.selector);
					}
					res.push({ container, remove: false });
				});
				return res;
			}
		},
		[]
	);

	const removeElement = useCallback((res: { id: string; elem: Element; remove: boolean }) => {
		if (res.remove) {
			document.body.removeChild(res.elem);
		} else {
			res.elem.innerHTML = '';
		}
	}, []);

	useEffect(() => {
		const els = [] as { id: string; elem: Element; remove: boolean }[];
		widgets.forEach((widget) => {
			const { target, suppression } = widget;
			if (suppression && localStorage.getItem(suppression.key) === suppression.value) {
				debug('Widget rendering suppressed by local suppression key');
			} else {
				const elemId = `${widget.type}-${widget.id}`;
				let component: ReactElement | null = null;
				if (widget.type === 'notification_banner') {
					component = renderNotificationBannerWidget?.(widget) ?? (
						<NotificationBanner
							background={widget.background}
							foreground={widget.foreground}
							icon={widget.icon}
							message={widget.message}
							previewData={widget.previewData}
						/>
					);
				} else if (widget.type === 'notification_popup') {
					component = renderNotificationPopupWidget?.(widget) ?? (
						<NotificationPopup
							button={widget.button}
							header={widget.header}
							previewData={widget.previewData}
							target={widget.target}
						/>
					);
				} else if (widget.type === 'notification_modal') {
					component = renderNoficiationModalWidget?.(widget) ?? (
						<NotificationModal
							button={widget.button}
							footer={widget.footer}
							header={widget.header}
							previewData={widget.previewData}
						/>
					);
				} else if (widget.type === 'most_recent_posts') {
					component = renderMostRecentPostsWidget?.(widget) ?? (
						<MostRecentPosts previewData={widget.previewData} count={widget.count} />
					);
				}

				if (component) {
					if (suppression && !DEBUG_MODE) {
						localStorage.setItem(suppression.key, suppression.value);
					}
					const results = buildComponentRenderer(component, elemId, target, () => {
						debug('Removing element from the DOM on close', elemId);
						results.forEach((result) => {
							removeElement({ id: elemId, elem: result.container, remove: result.remove });
							const idx = els.findIndex((e) => e.id === elemId);
							if (idx >= 0) {
								els.splice(idx, 1);
							}
						});
					});
					results.forEach((result) => {
						els.push({ id: elemId, elem: result.container, remove: result.remove });
					});
				}
			}
		});

		return () => {
			if (els.length) {
				els.forEach(removeElement);
			}
		};
	}, [
		widgets,
		renderNotificationBannerWidget,
		renderNoficiationModalWidget,
		renderMostRecentPostsWidget,
		renderNotificationPopupWidget,
	]);

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
				const play = function (e: any) {
					e.preventDefault();
					e.stopPropagation();
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
