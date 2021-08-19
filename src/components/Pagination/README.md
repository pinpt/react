### A component to render pagination controls on a page

[Full Docs](https://react.preview.pinpoint.com/?path=/docs/components-pagination) | [Github](https://github.com/pinpt/react/tree/master/src/components/Pagination)

#### Theming

The parent className for styling this component is `.Pagination`

<details>
	<summary>Base Theme Styles</summary>

```css
.paginationWrapper {
	@apply pb-10 md:pb-14 flex-grow;
}

.paginationWrapper .Pagination {
	@apply md:ml-[calc(25%+1rem)];
}

.Pagination {
	@apply flex justify-between items-center space-x-10;
	color: var(--page-highlight-color);
}

.Pagination.forwardOnly {
	@apply justify-end;
}

.Pagination .back,
.Pagination .forward {
	@apply min-w-0 flex items-center cursor-pointer;
	flex: 1 1 50%;
}

.Pagination .forward {
	@apply justify-end;
}

.Pagination .forward .icon {
	@apply ml-2 flex-shrink-0;
}

.Pagination .back .icon {
	@apply mr-2 flex-shrink-0;
}

.Pagination .back .text,
.Pagination .forward .text {
	@apply truncate;
}
```

</details>
