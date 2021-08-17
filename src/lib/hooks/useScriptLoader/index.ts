import { useState, useEffect, useRef } from 'react';
import useBackground from '../useBackground';
import sleep from '../../sleep';

const loadScript = (
	head: HTMLElement,
	src: string,
	increment: () => void,
	setError: (err: Error) => void,
	count = 1
) => {
	const script = document.createElement('script');
	script.src = src;
	script.async = true;
	script.onload = () => increment();
	script.onerror = () => {
		if (count < 5) {
			script.remove();
			sleep(Math.random() * 250).then(() => loadScript(head, src, increment, setError, count + 1));
		} else {
			setError(new Error(`error loading ${src}`));
		}
	};
	head.appendChild(script);
};

type scriptLoadCallback = () => string | string[] | undefined;

const useScriptLoader = (
	scripts: scriptLoadCallback | string | string[],
	retry = true,
	idlePeriod = 0,
	dependencies: any[] = []
): [boolean, Error | undefined] => {
	const [ready, setReady] = useState(false);
	const readyCount = useRef(0);
	const [error, setError] = useState<Error | undefined>(undefined);
	const scriptCount = useRef(0);
	const background = useBackground();
	const loaded = useRef(false);
	const increment = () => {
		if (scriptCount) {
			readyCount.current += 1;
			if (scriptCount.current === readyCount.current && !ready) {
				setReady(true);
			}
		}
	};
	useEffect(() => {
		if (!loaded.current) {
			const load = () => {
				const head = document.getElementsByTagName('head')[0];
				let toload: string[] | undefined;
				if (typeof scripts === 'function') {
					const res = scripts();
					if (res) {
						toload = Array.isArray(res) ? res : [res];
					}
				} else {
					toload = Array.isArray(scripts) ? scripts : [scripts];
				}
				if (toload?.length) {
					scriptCount.current = toload.length;
					toload.forEach((src: string) => loadScript(head, src, () => increment(), setError, retry ? 1 : 5));
				}
			};
			if (idlePeriod > 0) {
				background(load, idlePeriod);
			} else {
				load();
			}
			loaded.current = true;
		}
	}, dependencies);
	return [ready, error];
};

export default useScriptLoader;
