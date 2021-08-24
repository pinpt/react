### A container used to compose a changelog card from smaller card components

[Full Docs](https://react.preview.pinpoint.com/?path=/docs/components-card-container) | [Github](https://github.com/pinpt/react/tree/master/src/components/Card/Container)

#### Theming

The parent className for styling this component is `.Pinpoint.Content.Card.Container`

<details>
	<summary>Base Theme Styles</summary>

```css
.Pinpoint.Content.Card.Container.wrapper {
	@apply w-full rounded-md overflow-hidden mt-auto flex flex-col h-full cursor-pointer shadow-md hover:shadow-lg transition-all duration-200;
	background-color: var(--card-bg-color);
}

.Pinpoint.Content.Card.Container.wrapper .cover,
.Pinpoint.Content.Card.Container.wrapper .covermedia .media-container img {
	@apply md:h-36 lg:h-48 w-full object-cover object-center;
}

.Pinpoint.Content.Card.Container.wrapper .empty-cover {
	@apply md:h-36 lg:h-48 w-full;
	background-image: linear-gradient(to right, var(--card-empty-gradient-from), var(--card-empty-gradient-to));
}

.Pinpoint.Content.Card.Container.wrapper .content {
	@apply flex flex-col p-6 flex-grow flex-shrink;
}

.Pinpoint.Content.Card.Container.wrapper .footer {
	@apply flex mt-auto;
}

.Pinpoint.Content.Card.Container.wrapper .statistics {
	@apply ml-auto;
}
```

</details>
