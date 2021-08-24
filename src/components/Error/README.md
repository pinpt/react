### Displays an error message and code

[Full Docs](https://react.preview.pinpoint.com/?path=/docs/components-error) | [Github](https://github.com/pinpt/react/tree/master/src/components/Error)

#### Theming

The parent className for styling this component is `.Pinpoint.Error`

<details>
	<summary>Base Theme Styles</summary>

```css
.Pinpoint .Page.ErrorPage {
	@apply h-screen w-full flex flex-col justify-between items-stretch;
}

.Pinpoint .errorWrapper {
	@apply flex-grow py-10 flex flex-col justify-center;
}

.Pinpoint.Error {
	@apply flex flex-col justify-center items-center text-center;
}

.Pinpoint.Error .logo {
	@apply mb-10 md:mb-14;
}

.Pinpoint.Error .error {
	@apply uppercase font-medium;
	color: var(--page-error-color);
}

.Pinpoint.Error .title {
	@apply my-4 text-4xl md:text-5xl font-semibold;
	color: var(--page-title-color);
}

.Pinpoint.Error .description {
	@apply text-lg;
	color: var(--page-secondary-text-color);
}

.Pinpoint.Error .link {
	@apply mt-10 flex text-xl items-center;
	color: var(--page-highlight-color);
}

.Pinpoint.Error .link .icon {
	@apply ml-2;
}
```

</details>
