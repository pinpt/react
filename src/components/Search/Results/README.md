### A component to display the search results

[Full Docs](https://react.preview.pinpoint.com/?path=/docs/components-search-search-results) | [Github](https://github.com/pinpt/react/tree/master/src/components/Search/Results)

#### Theming

The parent className for styling this component is `.Search.Results`

<details>
	<summary>Base Theme Styles</summary>

```css
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

.Recent,
.Search.Results {
	@apply flex flex-col md:flex-row;
}

.Recent .cards,
.Search.Results .cards {
	@apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 grid-flow-row;
	flex-basis: 75%;
}

.Search.Results .empty {
	@apply text-3xl font-bold text-center;
}

.Search.Results .back {
	@apply flex items-center justify-center text-gray-500 text-xl mt-6 font-normal cursor-pointer;
}

.Search.Results .back .icon {
	@apply mr-2;
}
```

</details>
