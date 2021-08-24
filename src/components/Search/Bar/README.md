### A component for the search bar in the header

[Full Docs](https://react.preview.pinpoint.com/?path=/docs/components-search-search-bar) | [Github](https://github.com/pinpt/react/tree/master/src/components/Search/Bar)

The search component can use either a change handler or a submit handler (or both) depending on the desired behavior.

#### Theming

The parent className for styling this component is `.Pinpoint.Search.Bar`

<details>
	<summary>Base Theme Styles</summary>

```css
.Pinpoint.Search.Bar {
	@apply border rounded-full flex items-center w-48 h-8 overflow-hidden transition-colors duration-200;
	border-color: var(--header-control-color);
	color: var(--header-control-color);
}

.Pinpoint.Search.Bar .icon {
	@apply ml-3 mr-2;
}

.Pinpoint.Search.Bar .input {
	@apply w-full border-0 py-1 pr-2 outline-none bg-transparent;
	color: var(--page-text-color);
}

.Pinpoint.Search.Bar .input::placeholder {
	@apply opacity-30 transition-colors duration-200;
	color: var(--page-text-color);
}
```

</details>
