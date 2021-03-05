# Step by step Setup
• Assuming Node.js (comes w/ npm & npx) installed \
: used: XCode (Command Line Tools), Homebrew, asdf

• `../scrimba % npx create-react-app instagram-clone-react` \
: Creates a complete, barebone app w/ `package.json` & `.gitignore`, `/src`, `/public` ..

• `../scrimba % cd instagram-..`

• Commit, push to github

• `../instagram-.. % npm install date-fns react-loading-skeleton react-router-dom`

• Set Firebase credentials env variables to access in `/src/lib/firebase.js` \
: <= Do not push sensitive info to github \
: React can read env variables (from `process.env.`) if they start w/ `REACT_APP_`

• Implement Firebase (& FieldValue) in the app:

: in `/src/lib/firebase.js`: \
:: `const FirebaseApp = window.firebase.initializeApp(firebaseConfig);` \
:: `const { FieldValue } = FirebaseApp.firestore;` // Karl: `window.firebase.firestore;` \
:: `export { FirebaseApp, FieldValue };`

: in `index.js`: \
:: `import { FirebaseApp, FieldValue } from 'src/lib/firebase';`

• Create FirebaseContext in `index.js`

• Seed Firebase w/ data \
: requires toggling of Firebase authentication rules (in Firebase web console) \
:: failed Firebase seeding authentication (to write the seed data) \
:: causes an 'invalid data' issue, which in turn causes a 'CORS' issue  \
:: (which was all hard to catch & "debug")



# (Orig by React:) Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
