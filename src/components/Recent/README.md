### Displays a headline for the recent changelogs and can display an arbitrary number.

> _Tip:_ This section should begin with the first document that wasn't included in the 'Latest' section.

[Full Docs](https://react.preview.pinpoint.com/?path=/docs/components-recent) | [Github](https://github.com/pinpt/react/tree/master/src/components/Recent)

#### Theming

The parent className for styling this component is `.Latest`

<details>
	<summary>Base Theme Styles</summary>

```css
.recentWrapper,
.searchResultsWrapper {
	@apply py-10 md:py-14;
}

.Recent,
.Search.Results {
	@apply flex flex-col md:flex-row;
}

.Recent .cards,
.Search.Results .cards {
	@apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 grid-flow-row;
	flex-basis: 75%;
}

.Recent .pageIndicator {
	@apply font-normal text-base ml-2;
	color: var(--page-secondary-text-color);
}

.Recent .cards,
.Search.Results .cards {
	@apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 grid-flow-row;
	flex-basis: 75%;
}

.Recent .pageIndicator {
	@apply font-normal text-base ml-2;
	color: var(--page-secondary-text-color);
}

.Latest .heading,
.Recent .heading,
.Search.Query .heading,
.Search.Results .heading {
	@apply text-2xl font-semibold;
}

.Latest .heading,
.Recent .heading,
.Search.Results .heading {
	@apply mb-10 md:mb-0 md:mr-4;
	flex-basis: 25%;
}
```

</details>
