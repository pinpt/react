### The statistic component contains a number of sub-components for rendering clap counts and pageview counts.

[Full Docs](https://react.preview.pinpoint.com/?path=/docs/components-statistic) | [Github](https://github.com/pinpt/react/tree/master/src/components/Statistic)

#### Theming

The parent className for styling this component is `.Pinpoint.Statistic`

Each sub-component has its own class as well, `.Pinpoint.Views`, `.Pinpoint.Claps`, and `.Pinpoint.Bar`

<details>
	<summary>Base Theme Styles</summary>

```css
.Pinpoint.Statistic.wrapper {
	@apply flex items-center;
	color: var(--card-info-color);
}

.Pinpoint.Statistic .count {
	@apply ml-2;
}

.Pinpoint.Statistic.Bar .Statistic.Views.wrapper {
	@apply mr-4;
}
```

</details>
