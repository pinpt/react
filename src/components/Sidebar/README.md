### A sidebar when viewing an entry

[Full Docs](https://react.preview.pinpoint.com/?path=/docs/components-sidebar) | [Github](https://github.com/pinpt/react/tree/master/src/components/Sidebar)

#### Theming

The parent className for styling this component is `.Pinpoint.Sidebar`

<details>
	<summary>Base Theme Styles</summary>

```css
.Pinpoint.entryWrapper .sidebarWrapper {
	color: var(--article-info-color);
}

.Pinpoint.entryWrapper .sidebarWrapper.before {
	@apply md:mr-4 mb-8 md:mb-0 min-w-1/4;
}

.Pinpoint.entryWrapper .sidebarWrapper.before .Sidebar {
	@apply flex-shrink-0 flex-wrap;
}

.Pinpoint.entryWrapper .sidebarWrapper.before .Clap,
.Pinpoint.entryWrapper .sidebarWrapper.before .Social.Bar {
	@apply hidden md:flex;
}

.Pinpoint.entryWrapper .sidebarWrapper.after {
	@apply md:hidden;
}

.Pinpoint.entryWrapper .sidebarWrapper.after .Sidebar {
	@apply justify-between;
}

.Pinpoint.entryWrapper .sidebarWrapper.after .Date,
.Pinpoint.entryWrapper .sidebarWrapper.after .Author,
.Pinpoint.entryWrapper .sidebarWrapper.after .Tag.Bar {
	@apply hidden;
}
```

</details>
