# Pinpoint React Library

## Usage

Install the library:

```
npm i @pinpt/react
```

After installation, import the base styles. This is similar to a style reset and includes only the minimal styles for basic functionality.

The library is designed to be easily themable with CSS.

```jsx
import '@pinpt/react/base.css';
```

Components can be imported as so:

```jsx
import { Statistic } from '@pinpt/react';

const component = () => <Statistic.Bar claps={21} views={5} />;
```

## Read the docs

[Check out the docs](react.preview.pinpoint.com/) for detailed implementation guides.

## Components to Build

-  [x] View Count
-  [x] Clap Count
-  [x] Clap Button
-  [x] Changelog Card
-  [x] Read More Button
-  [x] Changelog Title
-  [x] Changelog Date
-  [x] Logo
-  [x] Changelog Body
-  [x] Latest Section
-  [x] Recent Section
-  [x] Copyright
-  [x] Subscribe to Updates
-  [x] Social Links
-  [x] Footer
-  [x] Page
-  [x] Search Field
-  [x] Tag
-  [x] Tag Group
-  [x] Header
-  [x] Search Filters
-  [x] Search Results

## TODO

-  [ ] Support for Media Queries (i.e. grid layout on 'Recent' section)
-  [ ] Finish default theme
-  [ ] Support for cover media other than images
-  [ ] Empty cover media state
-  [ ] Wire up claps
-  [ ] Pagination
-  [ ] Tag Filtering
