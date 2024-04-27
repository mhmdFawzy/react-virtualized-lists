# React virtualized

Virtualized Lists for using React, and TS.
In virtual scrolling, we don't display the entire content on the screen, to reduce the amount of DOM node rendering and calculations.
We still need to render the content in its full height (as if all the list items were rendered), otherwise, the scroller would be of the wrong size, which leaves an empty space at the bottom and the top.
As the user scrolls, we recalculate which nodes to add or remove from the screen.

## Available Scripts

### `npm run start`
Runs the app in the development mode.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm run test`
Launches the test runner and create coverage report.

### `npm run lint`
Lint the app without fixing any error.

### `npm run lint:fix`
Lint the app with fixing any error.

### `npm run format`
Format the ap using Prettier.

### `npm run build`
Builds the app for production to the dist folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

