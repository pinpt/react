### A component for the subscribe action link

[Full Docs](https://react.preview.pinpoint.com/?path=/docs/components-theme-toggle) | [Github](https://github.com/pinpt/react/tree/master/src/components/ThemeToggle)

The theme toggle toggles between light and dark themes. It does this by applying a class `dark` to the `html` element in the document. This can be used in your own custom theme, or if you're using tailwindcss you can use the `dark:` class prefix.

#### Theming

The parent className for styling this component is `.ThemeToggle`

<details>
	<summary>Base Theme Styles</summary>

```css
.ThemeToggle .mode {
	@apply relative block h-8 border;
	border-radius: 30px;
	width: 58px;
	outline-width: 0;
	outline-offset: 0;
	border-color: var(--header-control-color);
	color: var(--header-control-color);
}

.ThemeToggle .mode::after {
	content: '';
	position: absolute;
	right: 6px;
	top: 5px;
	border-radius: 50%;
	transition: transform 0.3s;
	height: 1.25rem;
	width: 1.25rem;
	background-color: var(--header-control-color);
}

html.dark .ThemeToggle .mode::before {
	background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' stroke='%23999' stroke-width='2' fill='%23999' stroke-linecap='round' stroke-linejoin='round' class='css-i6dzq1' viewBox='0 0 24 24'%3E%3Cpath d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'/%3E%3C/svg%3E");
	transform: translateX(26px);
}

html.dark .ThemeToggle .mode::after {
	transform: translateX(-24px);
}

.ThemeToggle .mode::before {
	@apply absolute h-full bg-cover bg-no-repeat top-0 left-0 w-8;
	content: '';
	background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' stroke='%23999' stroke-width='2.4' fill='none' stroke-linecap='round' stroke-linejoin='round' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='5'/%3E%3Cpath d='M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42'/%3E%3C/svg%3E");
	background-size: 50%;
	transition: 0.3s;
	background-position: 50%;
	background-color: initial;
	opacity: 0.5;
}
```

</details>
