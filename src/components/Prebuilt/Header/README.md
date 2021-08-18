# Prebuilt Header

The prebuilt components are the easiest to use since they work right out of the box, but provide super simple customization options. As its simplest, a prebuilt component can be rendered as such:

```jsx
import { Prebuilt, useSite } from '@pinpt/react';

const { Header } = Prebuilt;

const MySiteHeader = () => {
	const site = useSite();

	return <Header site={site} entries={entries} />;
};
```

That's it! You'll get a fully functioning header rendered with your data. Every part of the prebuilt component can be overridden, and if you want to hide a part of the app, simply return an empty fragment from the renderer:

```jsx
import { Prebuilt, useSite } from '@pinpt/react';

const { Header } = Prebuilt;

const MySiteHeader = () => {
	const site = useSite();

	return <Header site={site} renderLogo={() => <img src="path/to/my/awesome/logo" />} renderThemeToggler={() => <></>} />;
};
```
