### An interactive clap button that users can press to clap on a changelog

[Full Docs](https://react.preview.pinpoint.com/?path=/docs/components-clap) | [Github](https://github.com/pinpt/react/tree/master/src/components/Clap)

#### Theming

The parent className for styling this component is `.Clap`

<details>
	<summary>Base Theme Styles</summary>

```css
.Clap.wrapper {
	@apply relative cursor-pointer flex items-center;
}

.Clap.icon {
	@apply inline-flex items-center content-center transition-all;
	color: var(--page-secondary-text-color);
}

.Clap.icon.active {
	color: var(--page-highlight-color);
}

.Clap.counter {
	@apply opacity-0 ml-1 transition-all;
	color: var(--page-secondary-text-color);
}

.Clap.counter.active {
	@apply opacity-100;
}

.Clap.notice {
	@apply rounded-full opacity-0 absolute bg-black text-white select-none transition-all left-0 px-2 py-0.5;
}

.Clap.notice.active {
	@apply opacity-100 left-12;
}

.entryWrapper .sidebarWrapper.before .Clap,
.entryWrapper .sidebarWrapper.before .Social.Bar {
	@apply hidden md:flex;
}
```

</details>
