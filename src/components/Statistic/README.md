### The statistic component contains a number of sub-components for rendering clap counts and pageview counts.

[Full Docs](https://react.preview.pinpoint.com/?path=/docs/components-statistic) | [Github](https://github.com/pinpt/react/tree/master/src/components/Statistic)

#### Theming

The parent className for styling this component is `.Statistic`

Each sub-component has its own class as well, `.Views`, `.Claps`, and `.Bar`

<details>
	<summary>Base Theme Styles</summary>

```css
.Statistic.wrapper {
	@apply flex items-center;
	color: var(--card-info-color);
}

.Statistic .count {
	@apply ml-2;
}

.Statistic.Bar .Statistic.Views.wrapper {
	@apply mr-4;
}
```

</details>
