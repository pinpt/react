### A sidebar when viewing an entry

[Full Docs](https://react.preview.pinpoint.com/?path=/docs/components-sidebar) | [Github](https://github.com/pinpt/react/tree/master/src/components/Sidebar)

#### Theming

The parent className for styling this component is `.Sidebar`

<details>
	<summary>Base Theme Styles</summary>

```css
.entryWrapper .sidebarWrapper {
	color: var(--article-info-color);
}

.entryWrapper .sidebarWrapper.before {
	@apply md:mr-4 mb-8 md:mb-0 min-w-1/4;
}

.entryWrapper .sidebarWrapper.before .Sidebar {
	@apply flex-shrink-0 flex-wrap;
}

.entryWrapper .sidebarWrapper.before .Clap,
.entryWrapper .sidebarWrapper.before .Social.Bar {
	@apply hidden md:flex;
}

.entryWrapper .sidebarWrapper.after {
	@apply md:hidden;
}

.entryWrapper .sidebarWrapper.after .Sidebar {
	@apply justify-between;
}

.entryWrapper .sidebarWrapper.after .Date,
.entryWrapper .sidebarWrapper.after .Author,
.entryWrapper .sidebarWrapper.after .Tag.Bar {
	@apply hidden;
}
```

</details>
