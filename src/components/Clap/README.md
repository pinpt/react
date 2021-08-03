### An interactive clap button that users can press to clap on a changelog

[Full Docs](react.preview.pinpoint.com/?path=/docs/components-clap) | [Github](https://github.com/pinpt/react/tree/master/src/components/Clap)

#### Theming

The parent className for styling this component is `.Clap`

<details>
	<summary>Base Theme Styles</summary>

```css
.Clap.wrapper {
	position: relative;
	cursor: pointer;
	display: flex;
	align-items: center;
}

.Clap.icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	transition: color 0.2s;
}

.Clap.counter {
	opacity: 0;
	margin-left: 1rem;
	transition: opacity 0.2s;
}

.Clap.counter.active {
	opacity: 1;
}

.Clap.notice {
	opacity: 0;
	position: absolute;
	background-color: black;
	border-radius: 20px;
	color: white;
	user-select: none;
	transition: all 0.2s;
	left: 0rem;
	padding: 2px 10px;
}

.Clap.notice.active {
	opacity: 1;
	left: 3rem;
}
```

</details>

<details>
	<summary>Additional Styles in This Demo</summary>

```css
.Clap.icon {
	color: gray;
}

.Clap.icon.active {
	color: purple;
}

.Clap.counter {
	color: gray;
}
```

</details>
