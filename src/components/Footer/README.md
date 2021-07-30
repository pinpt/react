### A footer element to display social links, the copyright notice, and a subscribe button, as well as the powered by Pinpoint badge

[Full Docs](pinpt.github.io/react/?path=/docs/components-footer) | [Github](https://github.com/pinpt/react/tree/master/src/components/Footer)

#### Theming

The parent className for styling this component is `.Footer`

<details>
	<summary>Base Theme Styles</summary>

```css
.Footer {
	display: flex;
	flex-direction: column;
	padding: 4rem 2rem 0 4rem;
}

.Footer .content {
	display: flex;
	align-items: flex-end;
}

.Footer .powered {
	display: flex;
	padding: 2rem 0;
}

.Footer .right {
	margin-left: auto;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
}

.Footer .Social {
	margin-top: 0.2rem;
}
```

</details>

<details>
	<summary>Additional Styles in This Demo</summary>

```css
.Footer {
	background-color: #1e142c;
	color: #faf9f9;
}

.Footer .Social.Item {
	color: #faf9f9;
}
```

</details>
