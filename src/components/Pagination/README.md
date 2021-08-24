### A component to render pagination controls on a page

[Full Docs](https://react.preview.pinpoint.com/?path=/docs/components-pagination) | [Github](https://github.com/pinpt/react/tree/master/src/components/Pagination)

#### Theming

The parent className for styling this component is `.Pinpoint.Pagination`

<details>
	<summary>Base Theme Styles</summary>

```css
.Pinpoint.paginationWrapper {
	@apply pb-10 md:pb-14 flex-grow;
}

.Pinpoint.paginationWrapper .Pagination {
	@apply md:ml-[calc(25%+1rem)];
}

.Pinpoint.Pagination {
	@apply flex justify-between items-center space-x-10;
	color: var(--page-highlight-color);
}

.Pinpoint.Pagination.forwardOnly {
	@apply justify-end;
}

.Pinpoint.Pagination .back,
.Pinpoint.Pagination .forward {
	@apply min-w-0 flex items-center cursor-pointer;
	flex: 1 1 50%;
}

.Pinpoint.Pagination .forward {
	@apply justify-end;
}

.Pinpoint.Pagination .forward .icon {
	@apply ml-2 flex-shrink-0;
}

.Pinpoint.Pagination .back .icon {
	@apply mr-2 flex-shrink-0;
}

.Pinpoint.Pagination .back .text,
.Pinpoint.Pagination .forward .text {
	@apply truncate;
}
```

</details>
