### A component to render your enitire homepage - including the header, recent, latest, and footer components.

[Full Docs](https://react.preview.pinpoint.com/?path=/docs/components-page-entry) | [Github](https://github.com/pinpt/react/tree/master/src/components/Page/Entry)

The `Page.Entry` component must be wrapped by the `Pinpoint` component for all functionality to work. For more detailed instructions, [read about the Pinpoint component.](https://react.preview.pinpoint.com/?path=/docs/components-pinpoint)

_If you are using the prebuilt components, this is done for you._

#### Theming

The parent className for styling this component is `.Page.Entry`

<details>
	<summary>Base Theme Styles</summary>

```css
.Page.Entry {
	@apply flex flex-col h-screen;
}

.entryWrapper {
	@apply flex-grow;
	background-color: var(--article-bg-color);
}

.entryWrapper .entry {
	@apply py-10 md:py-14 flex flex-col md:flex-row border-t;
	border-color: var(--section-border-color);
}

.entryWrapper .entry .content {
	@apply flex-grow;
}

.entryWrapper .entry article {
	@apply flex-grow;
}

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

.entryWrapper .renderer {
	@apply mb-10 md:mb-14;
	color: var(--article-text-color);
}
```

</details>
