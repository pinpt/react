### The useContent hook is used to fetch a single content entry

## Usage

```jsx
import { useContent, Content } from '@pinpt/react';

const config = {
	slug: 'pinpoint',
	siteId: 'PirxVTE94u3YmGNOySRY',
	apihost: 'api.pinpoint.com',
	pageSize: 11,
	siteUrl: 'https://changelog.pinpoint.com',
	apiKey: '1234',
} as IPinpointConfig;

export default () => {
	const { loading, error, content } = useContent(config, 'U359ytO97WPbOeLpTtlE');

	return <Content {...content} />;
};
```

## Arguments

| Name       | Type                                | Description                                |
| ---------- | ----------------------------------- | ------------------------------------------ |
| Config     | `Omit<IPinpointConfig, 'pageSize'>` | The config for your site                   |
| Content ID | `String`                            | The id for the content entry to be fetched |

## Returns

| Name    | Type           | Description                             |
| ------- | -------------- | --------------------------------------- |
| Loading | `Boolean`      | True if data is currently being fetched |
| Error   | `String`       | The error message, if applicable        |
| Content | `ContentProps` | The content entry to be rendered        |
