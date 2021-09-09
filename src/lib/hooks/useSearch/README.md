### The useSearch hook is used to fetch results based on a query of either a search term or a list of tags

## Usage

```jsx
import { useState } from 'react';
import { useSearch, PrebuiltSearchResults } from '@pinpt/react';

export default () => {
	const [term, setTerm] = useState('publish');
	const { results, loading } = useSearch(term, [], 'PirxVTE94u3YmGNOySRY');

	return (
		<PrebuiltSearchResults
			entries={results}
			site={site}
			loading={loading}
			searchTerm={term}
			handleRemoveFromQuery={() => setTerm('')}
			handleSearch={setTerm}
		/>
	);
};
```

## Arguments

| Name    | Type     | Description            |
| ------- | -------- | ---------------------- |
| Term    | `String` | The term to search for |
| Tags    | `String` | The tags to search for |
| Site ID | `String` | The id for your site   |

## Returns

| Name    | Type         | Description                                          |
| ------- | ------------ | ---------------------------------------------------- |
| Loading | `Boolean`    | True if data is currently being fetched              |
| Content | `IContent[]` | The content entries matching the term to be rendered |
