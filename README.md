# react-hybrid-starter
### Very much a work in progress, the builds are currently broken!

A boilerplate using ReactJS, SASS, Gulp, and Browserify.
The boilerplate features hot reloading using LiveReactload.

The Boilerplate acts as a barebones project for you to share code between a React web application and a React Native application.


### Getting up and running for web.

1. Run `npm install` from the root directory
2. Run `NODE_ENV=web node env_task.js`
   This modifies the path in `src/js/components/index.js` to be the value of NODE_ENV
3. Run `npm start`

### Getting up and running for React-Native.

1. Run `npm install` from the ApplicationNative/ApplicationNative.
2. Navigate to the `node_tasks` folder of the root directory
3. Run `NODE_ENV=ios node env_task.js`
   This modifies the path in `src/js/components/index.js` to be the value of NODE_ENV
4. Go back to the root directory
5. Run `npm run native-build`
6. Navigation to `ApplicationNative/ApplicationNative`
7. Run `npm start`
8. Open `ApplicationNative.xcodeproj` from `/ApplicationNative/ApplicationNative/ios`
9. Press the Run/Play button. This will launch the iOS Simulator with our React Native application
