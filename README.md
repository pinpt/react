<div align="center">
	 
## Pinpoint React Library

![npm](https://img.shields.io/npm/v/@pinpt/react?logo=npm&label=latest%20release) ![GitHub issues](https://img.shields.io/github/issues/pinpt/react?logo=github) ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/pinpt/react/Tests%20CI?label=tests&logo=github) ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/pinpt/react/Node.js%20CI?logo=npm)

</div>

# Usage

## Installing:

```
npm i @pinpt/react
```

After installation, import the base styles. This is similar to a style reset and includes only the minimal styles for basic functionality.

The library is designed to be easily themable with CSS.

```jsx
import '@pinpt/react/dist/base.css';
```

Components can be imported as so:

```jsx
import { Statistic } from '@pinpt/react';

const component = () => <Statistic.Bar claps={21} views={5} />;
```

## Building Your Site:

There are two primary ways to build a site using this library, either using prebuilt components, or custom-building the application yourself. Using prebuilt components is the easiest way to get up and running, and you can read more about them [here](https://react-docs.preview.pinpoint.com/?path=/docs/prebuilt-components-entry--default).

Using the components individually provides for more customization options, but you'll need to be careful to include a few important parts. The most important is the `Pinpoint` component to wrap your content entries. Without this, analytics and link unfurling will not work as expected. Read more about implementation [here](https://react-docs.preview.pinpoint.com/?path=/docs/components-pinpoint--simple-test).
<br>
<br>

# Read the docs

[Check out the docs](https://react-docs.preview.pinpoint.com/) for detailed implementation guides. You can also play with the [Interactive Storybook](https://react.preview.pinpoint.com/)
<br>
<br>

# Local Dev

If you want to do local dev with the [App Template](https://github.com/pinpt/app-template) you can use the following:

In this folder, cd into `node_modules` and then:

```bash
cd react && npm link
cd react-dom && npm link
```

This will link te react and react-dom libraries so they can be used by the other project.

Then, in the app-template folder, run:

```bash
npm link react react-dom
```

This will then link those library into the node_modules for app-template and then allow you to make changes to this project and then test them live in the other. You'll still need to run `npm run build` with each change to make sure those changes are compiled and then `npm run dev` in the app-template to pick them up.
