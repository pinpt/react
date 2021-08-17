### The useEntries hook is used to fetch a list of entries for your site.

## Usage

```jsx
import { useEntries, Prebuilt } from '@pinpt/react';

const config = {
	slug: 'pinpoint',
	siteId: 'PirxVTE94u3YmGNOySRY',
	apihost: 'api.pinpoint.com',
	pageSize: 11,
	siteUrl: 'https://changelog.pinpoint.com',
} as IPinpointConfig;

export default () => {
	const { content, site, loading } = useEntries(config, 0);

	if (loading) {
		return <Loader />
	}

	return <Prebuilt.Home entries={content} site={site} />;
};
```

## Arguments

| Name   | Type              | Description                         |
| ------ | ----------------- | ----------------------------------- |
| Config | `IPinpointConfig` | The config for your site            |
| Offset | `Number`          | The offset to use in the pagination |

## Returns

| Name      | Type              | Description                                |
| --------- | ----------------- | ------------------------------------------ |
| Loading   | `Boolean`         | True if data is currently being fetched    |
| Error     | `String`          | The error message, if applicable           |
| Content   | `IContent[]`      | The content entries to be rendered         |
| Site      | `ISite`           | The site data                              |
| Analytics | `AnalyticsResult` | The analytics data for the entries fetched |
