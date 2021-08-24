### Components for the tags on content entries

[Full Docs](https://react.preview.pinpoint.com/?path=/docs/components-tag) | [Github](https://github.com/pinpt/react/tree/master/src/components/Tag)

#### Theming

The parent className for styling this component is `.Pinpoint.Tag.Bar`. Each tag item has a className `.Pinpoint.Tag.Item`

<details>
	<summary>Base Theme Styles</summary>

```css
.Content.Card .Pinpoint.Tag.Bar {
	@apply mb-4;
}

.Pinpoint.entryWrapper .sidebarWrapper.after .Date,
.Pinpoint.entryWrapper .sidebarWrapper.after .Author,
.Pinpoint.entryWrapper .sidebarWrapper.after .Tag.Bar {
	@apply hidden;
}

.Pinpoint.Tag.Item {
	@apply inline-flex items-center rounded-full text-xs px-1.5 py-0.5;
}

.Pinpoint.Tag.Item.nocolor {
	@apply text-gray-600 bg-gray-300 border border-gray-500;
}

.Pinpoint.Tag.Item .icon {
	@apply ml-1;
}

.Pinpoint.Tag.Bar {
	@apply flex flex-wrap gap-x-2 gap-y-2;
}
```

</details>
