### A component to display the search results

[Full Docs](https://react.preview.pinpoint.com/?path=/docs/components-search-search-results) | [Github](https://github.com/pinpt/react/tree/master/src/components/Search/Results)

#### Theming

The parent className for styling this component is `.Pinpoint.Search.Results`

<details>
	<summary>Base Theme Styles</summary>

```css
.Pinpoint.Latest .heading,
.Pinpoint.Recent .heading,
.Pinpoint.Search.Query .heading,
.Pinpoint.Search.Results .heading {
	@apply text-2xl font-semibold;
}

.Pinpoint.Latest .heading,
.Pinpoint.Recent .heading,
.Pinpoint.Search.Results .heading {
	@apply mb-10 md:mb-0 md:mr-4;
	flex-basis: 25%;
}

.Pinpoint.Recent,
.Pinpoint.Search.Results {
	@apply flex flex-col md:flex-row;
}

.Pinpoint.Recent .cards,
.Pinpoint.Search.Results .cards {
	@apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 grid-flow-row;
	flex-basis: 75%;
}

.Pinpoint.Search.Results .empty {
	@apply text-3xl font-bold text-center;
}

.Pinpoint.Search.Results .back {
	@apply flex items-center justify-center text-gray-500 text-xl mt-6 font-normal cursor-pointer;
}

.Pinpoint.Search.Results .back .icon {
	@apply mr-2;
}
```

</details>
