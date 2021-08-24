### Displays the title of your site, the description, and a subscribe button, and can contain search and your logo (coming soon)

[Full Docs](https://react.preview.pinpoint.com/?path=/docs/components-header) | [Github](https://github.com/pinpt/react/tree/master/src/components/Header)

#### Theming

The parent className for styling this component is `.Pinpoint.Header`

<details>
	<summary>Base Theme Styles</summary>

```css
.Pinpoint.headerWrapper {
	background-color: var(--header-bg-color);
}

.Pinpoint.Header {
	@apply flex py-5 flex-col;
}

.Pinpoint.Header .top {
	@apply flex justify-between;
}

.Pinpoint.Header .right {
	@apply flex gap-x-4;
}

.Pinpoint.Header .center {
	@apply py-8 flex flex-col content-center text-center;
}

.Pinpoint.Header .title {
	@apply font-semibold text-4xl md:text-5xl py-6 transition-colors duration-200;
	color: var(--header-title-color);
}

.Pinpoint.Header .description {
	color: var(--header-description-color);
}

.Pinpoint.Header .action {
	@apply mt-6 mx-auto;
}

.Pinpoint.Header .Subscribe {
	color: var(--header-subscribe-color);
}
```

</details>
