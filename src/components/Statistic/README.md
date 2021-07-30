### The statistic component contains a number of sub-components for rendering clap counts and pageview counts.

[Full Docs](https://laughing-train-834032fc.pages.github.io/?path=/docs/components-statistic) | [Github](https://github.com/pinpt/react/tree/master/src/components/Statistic)

#### Theming

The parent className for styling this component is `.Statistic`

Each sub-component has its own class as well, `.Views`, `.Claps`, and `.Bar`

<details>
	<summary>Base Theme Styles</summary>

```css
.Statistic.wrapper {
	display: flex;
	align-items: center;
}

.Statistic .count {
	margin-left: 5px;
}

.Statistic.Bar .Statistic.Views.wrapper {
	margin-right: 20px;
}
```

</details>
