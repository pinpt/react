# Pinpoint React Library

## Usage

First, import the base styles. This is similar to a style reset and includes only the minimal styles for basic functionality.

The library is designed to be easily themable with CSS.

```jsx
import '@pinpt/react/base.css';
```

Components can be imported as so:

```jsx
	import { Statistic } from '@pinpt/react';


	const component = () => (
		<Statistic.Bar claps={21} views={5} />
	);
```

## Components to Build

-  [x] View Count
-  [x] Clap Count
-  [x] Clap Button
-  [x] Changelog Card
-  [x] Read More Button
-  [x] Changelog Title
-  [x] Changelog Date
-  [x] Logo
-  [ ] Changelog Body
-  [x] Latest Section
-  [x] Recent Section
-  [x] Copyright
-  [x] Subscribe to Updates
-  [x] Social Links
-  [x] Footer
-  [x] Page
-  [ ] Search Field
-  [ ] Tag
-  [ ] Tag Group
-  [x] Header
-  [ ] Search Filters
-  [ ] Search Results

## TODO

-  [ ] Support for Media Queries (i.e. grid layout on 'Recent' section)
-  [ ] More fully built out defaul theme
