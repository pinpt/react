### Displays a simple loading indicator

[Full Docs](https://react.preview.pinpoint.com/?path=/docs/components-loader) | [Github](https://github.com/pinpt/react/tree/master/src/components/Loader)

#### Theming

The parent className for styling this component is `.Pinpoint.Loader`

<details>
	<summary>Base Theme Styles</summary>

```css
.Pinpoint.Loader {
	@apply absolute left-0 top-0 right-0 bottom-0 flex items-center content-center justify-center;
}

.Pinpoint.Loader .inner {
	@apply w-12 h-12 rounded-full border-3 animate-ping border-gray-900 m-6;
	border-color: var(--page-secondary-text-color);
}

.Pinpoint .Page .loaderWrapper {
	@apply relative flex-grow;
}
```

</details>
