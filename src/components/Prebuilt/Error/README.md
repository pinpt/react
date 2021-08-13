# Prebuilt Error

The prebuilt components are the easiest to use since they work right out of the box, but provide super simple customization options. As its simplest, a prebuilt component can be rendered as such:

```jsx
import { Prebuilt, useSite } from '@pinpt/react';

const { Error } = Prebuilt;

const ErrorPage = () => {
	const site = useSite();

	return <Error.NotFound site={site} />;
};
```