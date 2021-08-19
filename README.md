# Pinpoint React Library

## Usage

Install the library:

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

## Read the docs

[Check out the docs](https://react-docs.preview.pinpoint.com/) for detailed implementation guides. You can also play with the [Interactive Storybook](https://react.preview.pinpoint.com/)

## Local Dev

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
