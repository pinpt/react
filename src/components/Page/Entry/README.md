### A component to render your enitire homepage - including the header, recent, latest, and footer components.

[Full Docs](https://react.preview.pinpoint.com/?path=/docs/components-page-entry) | [Github](https://github.com/pinpt/react/tree/master/src/components/Page/Entry)

The `Page.Entry` component must be wrapped by the `Pinpoint` component for all functionality to work. For more detailed instructions, [read about the Pinpoint component.](https://react.preview.pinpoint.com/?path=/docs/components-pinpoint)

_If you are using the prebuilt components, this is done for you._

#### Theming

The parent className for styling this component is `.Pinpoint.Page.Entry`

<details>
	<summary>Base Theme Styles</summary>

```css
.Pinpoint.Page.Entry {
	@apply flex flex-col h-screen;
}

.Pinpoint.entryWrapper {
	@apply flex-grow;
	background-color: var(--article-bg-color);
}

.Pinpoint.entryWrapper .entry {
	@apply py-10 md:py-14 flex flex-col md:flex-row border-t;
	border-color: var(--section-border-color);
}

.Pinpoint.entryWrapper .entry .content {
	@apply flex-grow;
}

.Pinpoint.entryWrapper .entry article {
	@apply flex-grow;
}

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

.Pinpoint.entryWrapper .renderer {
	@apply mb-10 md:mb-14;
	color: var(--article-text-color);
}
```

</details>
