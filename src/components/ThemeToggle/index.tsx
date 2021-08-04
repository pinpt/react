import { useCallback } from 'react';

export interface IThemeToggleProps {
	className?: string;
	onThemeChange?: (theme: 'light' | 'dark') => void;
}

const ThemeToggle = (props: IThemeToggleProps) => {
	const { className = '', onThemeChange } = props;

	const handleToggleTheme = useCallback(() => {
		const element = document.getElementsByTagName('html')?.[0];
		if (element) {
			if (element.classList.contains('dark')) {
				element.classList.remove('dark');
				onThemeChange?.('light');
			} else {
				element.classList.add('dark');
				onThemeChange?.('dark');
			}
		}
	}, [onThemeChange]);

	return (
		<div className={`Pinpoint ThemeToggle ${className}`}>
			<button className="mode" onClick={handleToggleTheme} />
		</div>
	);
};

export default ThemeToggle;
