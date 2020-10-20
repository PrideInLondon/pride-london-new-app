# Pride In London - React Native App

## Environment Setup
Please follow the instructions to setup the environment here (https://reactnative.dev/docs/environment-setup)[https://reactnative.dev/docs/environment-setup]. 

*NOTE:* Please ensure you select the **React Native CLI Quickstart** instructions, **NOT** the Expo CLI Quickstart.

You can then select specific instructions for which Development OS you are using (macOS/Windows/Linux), and which target OS (iOS/Android). 

Follow the instructions up **until** "Creating a new application". 

To install the app, change directory into the project root, `pride-london-new-app` folder, and run `yarn` to install dependencies. For iOS, you will need to:

```
cd ios && pod install
```
This uses CocoaPods (a dependency manager like yarn for iOS libraries) to install native dependencies (Swift / Objective-C). Some react-native node_modules require dependencies on the native side in iOS, `pod install` is how these are added and linked. 


## Running the App in the Simulator
To run the application, go back to the root directory:
```
cd .. && yarn start
```

This will start the Metro Bundler, you can think of this as the React Native version of webpack, it will compile your application. 

In another terminal window, in the root of the project directory, run `yarn ios` to build the iOS application, and run it on the iOS Simulator. For android, run `yarn android`.  
