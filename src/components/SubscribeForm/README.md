### A component for the new user subscription form

[Full Docs](https://react.preview.pinpoint.com/?path=/docs/components-subscribeform) | [Github](https://github.com/pinpt/react/tree/master/src/components/SubscribeForm)

#### Theming

The parent className for styling this component is `.SubscribeForm`

<details>
	<summary>Base Theme Styles</summary>

```css
.SubscribeForm.wrapper {
	@apply block;
}

.SubscribeForm .inner {
	@apply flex flex-row;
}

.SubscribeForm .inner .input {
	@apply relative border-2 mr-2 focus-within:border-blue-500 disabled:focus-within:border-gray-500;
}

.SubscribeForm .spinner {
	@apply absolute top-2 right-1 text-indigo-500 z-10;
}

.SubscribeForm .spinner.visible {
	@apply visible;
}

.SubscribeForm .spinner.invisible {
	@apply invisible;
}

.SubscribeForm input {
	@apply p-1 focus:outline-none pr-4 bg-white disabled:text-gray-400 disabled:bg-white disabled:cursor-not-allowed;
}

.SubscribeForm button {
	@apply border rounded text-gray-700 bg-gray-100 px-2 py-1 disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed;
}

.SubscribeForm .success {
	@apply text-green-600 dark:text-green-500 text-sm text-left mt-1;
}

.SubscribeForm .error {
	@apply text-red-500 text-sm text-left mt-1;
}

.SubscribeForm .error .icon,
.SubscribeForm .success .icon {
	@apply mr-1;
}

.SubscribeForm .error.visible {
	@apply visible;
}

.SubscribeForm .error.invisible {
	@apply invisible;
}
```

</details>
