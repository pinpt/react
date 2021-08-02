### A container used to compose a changelog card from smaller card components

[Full Docs](pinpt.github.io/react/?path=/docs/components-changelog-card-container) | [Github](https://github.com/pinpt/react/tree/master/src/components/ChangelogCard/Container)

#### Theming

The parent className for styling this component is `.Changelog.Card.Container`

<details>
	<summary>Base Theme Styles</summary>

```css
.Changelog.Card.Container.wrapper {
	width: 100%;
	border-radius: 0.5rem;
	overflow: hidden;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
	background: white;
}

.Changelog.Card.Container.wrapper .cover {
	width: 100%;
}

.Changelog.Card.Container.wrapper .content {
	display: flex;
	flex: 1 1 0%;
	flex-direction: column;
	padding: 1.5rem;
}

.Changelog.Card.Container.wrapper .footer {
	display: flex;
	margin-top: 1rem;
}

.Changelog.Card.Container.wrapper .statistics {
	margin-left: auto;
}
```

</details>

<details>
	<summary>Additional Styles in This Demo</summary>

```css
.Changelog.Card.Container.wrapper {
	background: #473e53;
	color: #faf9f9;
}
```

</details>
