### Displays a headline for the latest changelogs and can display any number of changelogs on the top row

> _Tip:_ This section should begin with the most recently published changelog and ideally will display 1-3 entries. It may be omitted if you wish every entry to be under the 'recent' section.


[Full Docs](https://laughing-train-834032fc.pages.github.io/?path=/docs/components-latest) | [Github](https://github.com/pinpt/react/tree/master/src/components/Latest)

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
