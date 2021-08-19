A wrapper component that includes necessary scripts for proper functioning of content rendering. This should be placed at the top level of your application, as such:

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

`ready` will be true once necessary scripts are done loading, and the content can be rendered. The `ref` must be passed to the child that contains your content.
