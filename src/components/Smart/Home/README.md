# Smart Components

The smart components are the easiest to use since they work right out of the box, but provide super simple customization options. As its simplest, a smart component can be rendered as such:

```jsx
import { Smart, useSite, useEntries } from '@pinpt/react';

const { Home } = Smart;

const MySite = () => {
	const site = useSite();
	const entries = useEntries();

	return <Home site={site} entries={entries} />;
};
```

That's it! You'll get a fully functioning homepage rendered with your data. Now assume you want to leave everything the same, but on every card you want to truncate the description, you can simply pass in a renderer override:

```jsx
import { Smart, useSite, useEntries, Card } from '@pinpt/react';

const { Home } = Smart;

const MySite = () => {
	const site = useSite();
	const entries = useEntries();

	return (
		<Home
			site={site}
			entries={entries}
			renderCardDescription={(entry) => <Card.Description description={entry.headline.slice(0, 20)} />}
		/>
	);
};
```

Every part of the smart component can be overridden, and if you want to hide a part of the app, simply return an empty fragment from the renderer:

```jsx
import { Smart, useSite, useEntries, Card } from '@pinpt/react';

const { Home } = Smart;

const MySite = () => {
	const site = useSite();
	const entries = useEntries();

	return <Home site={site} entries={entries} renderCardStatistics={() => <></>} />;
};
```
