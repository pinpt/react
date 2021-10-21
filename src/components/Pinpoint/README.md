### A wrapper component that includes necessary scripts for proper functioning of content rendering.

[Full Docs](https://react.preview.pinpoint.com/?path=/docs/components-pinpoint) | [Github](https://github.com/pinpt/react/tree/master/src/components/Pinpoint)

This component ensures that the analytics are set up and user's pageviews will be recorded. It is also responsible for initializing the script to unfurl links inline and wire up interactive elements such as YouTube videos and Toggle components.

It should be placed at the top level of your application, as such:

```jsx
<Pinpoint siteId={site.id}>
	{(ready, ref) => {
		if (!ready) {
			return <Loader />;
		}
		return <Document ref={ref} node={entry} />;
	}}
</Pinpoint>
```

`ready` will be true once necessary scripts are done loading, and the content can be rendered. The `ref` **must be passed** to the child that contains your content. If omitted, it will lead to link unfurling issues.

#### Theming

This component has no styles associated with it.

#### Widgets

In order to test widgets, the beacon must be loaded. When viewing stories in canvas mode, the beacon will be loaded for the `Test Widgets` story.
