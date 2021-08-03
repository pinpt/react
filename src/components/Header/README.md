### Displays the title of your site, the description, and a subscribe button, and can contain search and your logo (coming soon)

[Full Docs](react.preview.pinpoint.com/?path=/docs/components-header) | [Github](https://github.com/pinpt/react/tree/master/src/components/Header)

#### Theming

The parent className for styling this component is `.Header`

<details>
	<summary>Base Theme Styles</summary>

```css
.Header {
	display: flex;
}

.Header .title {
	font-weight: 600;
}

.Header .center {
	flex-grow: 1;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.Header .action {
	margin: 2rem auto;
}
```

</details>

<details>
	<summary>Additional Styles in This Demo</summary>

```css
.Header {
	background-color: #332a40;
	color: #faf9f9;
}
```

</details>
