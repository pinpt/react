### Displays a headline for the latest changelogs and can display any number of changelogs on the top row

> _Tip:_ This section should begin with the most recently published changelog and ideally will display 1-3 entries. It may be omitted if you wish every entry to be under the 'recent' section.

[Full Docs](https://react.preview.pinpoint.com/?path=/docs/components-latest) | [Github](https://github.com/pinpt/react/tree/master/src/components/Latest)

#### Theming

The parent className for styling this component is `.Pinpoint.Latest`

<details>
	<summary>Base Theme Styles</summary>

```css
.Pinpoint.latestWrapper {
	@apply py-10 md:py-14 transition-colors duration-200;
	background-color: var(--section-bg-color);
}

.Pinpoint.Latest .heading,
.Pinpoint.Recent .heading,
.Pinpoint.Search.Query .heading,
.Pinpoint.Search.Results .heading {
	@apply text-2xl font-semibold;
}

.Pinpoint.Latest {
	@apply flex flex-col md:flex-row;
}

.Pinpoint.Latest .heading,
.Pinpoint.Recent .heading,
.Pinpoint.Search.Results .heading {
	@apply mb-10 md:mb-0 md:mr-4;
	flex-basis: 25%;
}

.Pinpoint.Latest .cards {
	@apply flex gap-x-8;
	flex-basis: 75%;
}

.Pinpoint.Latest .Content.Card.Container.wrapper .cover,
.Pinpoint.Latest .Content.Card.Container.wrapper .covermedia .media-container img,
.Pinpoint.Latest .Content.Card.Container.wrapper .empty-cover {
	@apply md:h-64 lg:h-80;
}
```

</details>
