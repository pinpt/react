### The social component contains a number of sub-components for rendering social links.

[Full Docs](https://laughing-train-834032fc.pages.github.io/?path=/docs/components-social) | [Github](https://github.com/pinpt/react/tree/master/src/components/Social)

#### Theming

The parent className for styling this component is `.Social`

Each social icon has an additional `.Item` class applied as well as the name of the social network, such as `.Github`

<details>
	<summary>Base Theme Styles</summary>

```css
.Social {
	text-decoration: none;
	transition: color 0.2s;
}

.Social.Bar {
	display: flex;
	column-gap: 0.5rem;
}
```

</details>

<details>
	<summary>Additional Styles in This Demo</summary>

```css
/* Only make the social links light inside the footer */
.Footer .Social.Item {
	color: #faf9f9;
}
```

</details>