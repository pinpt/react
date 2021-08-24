### A footer element to display social links, the copyright notice, and a subscribe button, as well as the powered by Pinpoint badge

[Full Docs](https://react.preview.pinpoint.com/?path=/docs/components-footer) | [Github](https://github.com/pinpt/react/tree/master/src/components/Footer)

#### Theming

The parent className for styling this component is `.Pinpoint.Footer`

<details>
	<summary>Base Theme Styles</summary>

```css
.Pinpoint .footerWrapper {
	background-color: var(--footer-bg-color);
	color: var(--footer-text-color);
}

.Pinpoint.Footer {
	@apply py-14 text-sm;
	background-color: var(--footer-bg-color);
	color: var(--footer-text-color);
}

.Pinpoint.Footer .content {
	@apply flex flex-col md:items-end md:flex-row items-center;
}

.Pinpoint.Footer .powered {
	@apply flex pt-8;
}

.Pinpoint.Footer .right {
	@apply md:ml-auto py-6 md:py-0 flex flex-col items-center md:items-end;
}

.Pinpoint.Footer .Social {
	@apply mt-4 md:mt-1;
}

.Pinpoint.Footer .Copyright {
	@apply flex flex-col items-center md:items-start;
}
```

</details>
