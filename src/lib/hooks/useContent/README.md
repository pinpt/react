### The useContent hook is used to fetch a single content entry

## Usage

```jsx
import { useContent, Content } from '@pinpt/react';

export default () => {
	const { loading, error, content } = useContent(
		'pinpoint',
		'PirxVTE94u3YmGNOySRY',
		'U359ytO97WPbOeLpTtlE',
		'https://changelog.pinpoint.com'
	);

	return <Content {...content} />;
};
```

## Arguments

| Name       | Type     | Description                                |
| ---------- | -------- | ------------------------------------------ |
| Slug       | `String` | The slug for your site                     |
| Site ID    | `String` | The id for your site                       |
| Content ID | `String` | The id for the content entry to be fetched |
| Site URL   | `String` | The url your site is running at            |

## Returns

| Name    | Type           | Description                             |
| ------- | -------------- | --------------------------------------- |
| Loading | `Boolean`      | True if data is currently being fetched |
| Error   | `String`       | The error message, if applicable        |
| Content | `ContentProps` | The content entry to be rendered        |
