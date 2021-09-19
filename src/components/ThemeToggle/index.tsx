import React, { useCallback } from 'react';

export interface IThemeToggleProps {
	className?: string;
	onThemeChange?: (theme: 'light' | 'dark') => void;
	localStorageKey?: string; // if you want to change the localstorage key. defaults to 'theme'
}

const ThemeToggle = (props: IThemeToggleProps) => {
	const { className = '', onThemeChange, localStorageKey = 'theme' } = props;

	const handleToggleTheme = useCallback(() => {
		const element = document.getElementsByTagName('html')?.[0];
		if (element) {
			if (element.classList.contains('dark')) {
				element.classList.remove('dark');
				onThemeChange?.('light');
				window.localStorage.setItem(localStorageKey, 'light');
			} else {
				element.classList.add('dark');
				onThemeChange?.('dark');
				window.localStorage.setItem(localStorageKey, 'dark');
			}
		}
	}, [onThemeChange, localStorageKey]);

	React.useEffect(() => {
		if (typeof window !== 'undefined') {
			const localTheme = window.localStorage.getItem(localStorageKey);
			if (localTheme) {
				const element = document.getElementsByTagName('html')?.[0];
				switch (localTheme) {
					case 'dark': {
						element.classList.add('dark');
						onThemeChange?.('dark');
						break;
					}
					case 'light': {
						element.classList.remove('dark');
						onThemeChange?.('light');
						break;
					}
					default:
						break;
				}
			}
		}
	}, [localStorageKey, onThemeChange]);

	return (
		<div className={`Pinpoint ThemeToggle ${className}`}>
			<button className="mode" onClick={handleToggleTheme} aria-label="Toggle Theme" />
		</div>
	);
};

export default ThemeToggle;
