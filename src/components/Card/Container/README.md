### A container used to compose a changelog card from smaller card components

[Full Docs](https://react.preview.pinpoint.com/?path=/docs/components-card-container) | [Github](https://github.com/pinpt/react/tree/master/src/components/Card/Container)

#### Theming

The parent className for styling this component is `.Content.Card.Container`

<details>
	<summary>Base Theme Styles</summary>

```css
.Content.Card.Container.wrapper {
	@apply w-full rounded-md overflow-hidden mt-auto flex flex-col h-full cursor-pointer shadow-md hover:shadow-lg transition-all duration-200;
	background-color: var(--card-bg-color);
}

.Content.Card.Container.wrapper .cover,
.Content.Card.Container.wrapper .covermedia .media-container img {
	@apply md:h-36 lg:h-48 w-full object-cover object-center;
}

.Content.Card.Container.wrapper .empty-cover {
	@apply md:h-36 lg:h-48 w-full;
	background-image: linear-gradient(to right, var(--card-empty-gradient-from), var(--card-empty-gradient-to));
}

.Content.Card.Container.wrapper .content {
	@apply flex flex-col p-6 flex-grow flex-shrink;
}

.Content.Card.Container.wrapper .footer {
	@apply flex mt-auto;
}

.Content.Card.Container.wrapper .statistics {
	@apply ml-auto;
}
```

</details>
