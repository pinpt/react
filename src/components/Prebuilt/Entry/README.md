# Prebuilt Entry

The prebuilt components are the easiest to use since they work right out of the box, but provide super simple customization options. As its simplest, a prebuilt component can be rendered as such:

```jsx
import { Prebuilt, useSite, useEntry } from '@pinpt/react';

const { Entry } = Prebuilt;

const MySite = () => {
	const site = useSite();
	const entry = useEntry('1234');

	return <Entry site={site} entry={entries} />;
};
```

That's it! You'll get a fully functioning entry page rendered with your data. Now assume you want to leave everything the same, but you never want to show tags. If you want to hide a part of the app, simply return an empty fragment from the renderer:

```jsx
import { Prebuilt, useSite, useEntry } from '@pinpt/react';

const { Entry } = Prebuilt;

const MySite = () => {
	const site = useSite();
	const entry = useEntry('1234');

	return <Entry site={site} entry={entries} renderTags={() => <></>} />;
};
```
