### Displays a headline for the recent changelogs and can display an arbitrary number.

> _Tip:_ This section should begin with the first document that wasn't included in the 'Latest' section.

[Full Docs](https://laughing-train-834032fc.pages.github.io/?path=/docs/components-recent) | [Github](https://github.com/pinpt/react/tree/master/src/components/Recent)

#### Themeing

The parent className for styling this component is `.Latest`

<details>
	<summary>Base Theme Styles</summary>

```css
.Latest {
	display: flex;
	padding: 1rem;
}

.Latest .heading {
	margin-bottom: 0;
	margin-right: 3rem;
	width: 25%;
	min-width: 150px;
}

.Latest .container {
	display: flex;
	column-gap: 1rem;
}

```

</details>

<details>
	<summary>Additional Styles in This Demo</summary>

```css
.Latest {
	background-color: #292135;
}

.Latest .heading {
	color: #faf9f9;
}
```

</details>
