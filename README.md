#

## Scripts from course React-Native - The Practical Guide (Udemy Platform)

<div>
Difference between
Expo CLI

Is third party service that we can ue , is free
Manged app development writing code is easier . using device camera. More convincing less friction. We can leave the expo ecosystem any time it is good for start.
We can switch to React Native

React Native CLI
React native is the tool provided by the React Native team and the community around React Native
Bare bone development we need to set it up more
less convenience featured
Easier integration with native source code
If we need to mix JavaScript code and Native devices source code better to use React Native CLI

</div>

#

<div>
Installation , set up

1. Install expo

npm install -g expo-cli

2. expo init 'name folder'

3. Install on android or iOS device expo

4. Start project

npm start

5. Will appear bar code, scan it with phone (iOS with camera)

Setting up a local development environment

If we don't have android device we need to install simulator Android Studio, which allow us to run emulator (virtual device manager)
For iOS we need xcode software, its just for apple, will not work for windows (alternative is use cloud service)

For xcode

1. Open xcode
2. Go tp preferences , go to locations select version
   To run project on simulator
3. Go to xcode->applications ->show package content->contents->developer->application->simulator app

For android

1. INstall Android studio
2. Install a virtual device (with an icon for the expo, otherwise, it will not work)
3. Open emulator
4. In the command line press a, in running the project

</div>

#

css - style application in react native
inline styles
stylesheet object

Style on css syntax, but only a subset of properties and features is supported

react-native has its own components which we can use (use doc)

'<View/>'-> container, content , can hold component, not display text. Can have multiply components.

If we want to display text we need to use '<Text/>' component

### styling difference

iOs doesn't support borderRadius in the Text element, to go around we need to wrap text in View and add style in to.

info : in react-natve we do not have cascading nature of css, where child elements and descendant elements, inherit styles from parent. We don't have style inheritance

to add border shadow we use: elevation in styleSheet

#

### debugging

1. Open deb iOS :command +d
   android: control+m or click m in terminal

   debug javascript remotely, open a new tab in the browser,

   react devtool
   install globally npm install -g react-devtools
   run react-devtool
   it will open new windows with the dev tool, to see components, we have to open the developer debug dev tool in the simulator and enable debug javascript remote. In dev tools, we will see react-native components with props and state

#### Platform

API allows to detect which platform the app is running
Platform.select({ ios: 0, android: 2 }) we define the iOS and the Android values. Select will return the appropriate value in its place based on the platform
We can name components for android, for ex. Title.android.js will run on the android platform.

#

## library used:

<div>
<ul>
<li>axios</li>
<li><a href='https://docs.expo.dev/versions/v46.0.0/sdk/app-loading/'  target="_blank"> app-loading</a></li>
<li><a href='https://reactnative.dev/docs/asyncstorage'  target="_blank">asyn storage</a></li>
<li><a href='https://docs.expo.dev/versions/latest/sdk/imagepicker/'  target="_blank"> image Picekr</a></li>
<li><a href='https://docs.expo.dev/versions/latest/sdk/location/'  target="_blank"> expo location</a></li>
<li><a href='https://www.geoapify.com/get-started-with-maps-api'  target="_blank"> geoapfy instead google map</a></li>
<li><a href='https://docs.expo.dev/versions/latest/sdk/map-view/#installation'  target="_blank"> react native map</a></li>
<li><a href='https://docs.expo.dev/versions/latest/sdk/sqlite/'  target="_blank" > sqlie db for device to store date with squile command</a></li>
<li><a href='expo-app-loading'  target="_blank">app loading</a></li>
</ul>
</div>

### Expo Managed Workflow, we have a project with a configuration, with a native device feature.

- easy to set up and work with
  - quick and frictionless development
  - no or minimal configuration required
  - build (cross-platform)- standalone app

### Expo Bare workflow ->

- relatively easy to set up and work with
- convenient development
- some configuration required
- build (cross-platform) standalone apps

Installation

- expo init
- choose the bare workflow option

Run on emulator

- turn the emulator on android on
- run command npm run android

this need to install <a href='https://docs.expo.dev/versions/latest/sdk/location/' target="_blank">expo location </a> and follow instruction<a href='https://github.com/expo/expo/tree/sdk-48/packages/expo-location' target="_blank">instruction</a>

### Ejecting from expo to the bare Workflow

- expo eject
- accept process 'yes' (will not return changes)
- name project com.companyname.projectname (it is an identifier, which is used later for publishing the app)

- run with npm run android

### React native CLI

- more complex setup
- convenient development
- can require more configuration effort

## Installation

npm react-native init projectName
confirm process

we can install react native CLI globally -> npm install -g react-native-cli

EAS Build Service -> build app, and run in the device
-standalone apps are built Locally

---

#

## Publishing React Native app

### with expo (Managed or Bare Workflow)

   <div>
      <h3> 1. configure the project</h3>

   <p> permissions if we use camera, location etc, ask for permission
   android: Control permission requested and shown in the app store
   iOS: Define permission request text snippets </p>
   <p> App Name and Identifier: Set the visible app name, an app version and a unique app identifier</p>
   </div>

   <div>
      <h4> Environment Variables: store app-wide variables securely (e.g. PI keys)</h4>
      <a href='https://docs.expo.dev/build-reference/variables/' target="_blank"> Environment variables and secrets </a>
   </div>

   <div>
      <p>Change app name, and version (should be changed when we update the application in the app store) </p>
      <p>Versions for <a href='https://docs.expo.dev/distribution/app-stores/#versioning-your-app'  target="_blank"> iOS</a> and for <a href='https://developer.android.com/studio/publish/versioning'> android </a></p>
      <p><a href='https://docs.expo.dev/versions/latest/config/app/'  target="_blank"> app json configuration</a></p>
   </div>

   <div>
      <h4> Icons and Splash Screen: Configure nd generate fitting icons an loading screens</h4>
      <p>replace icon and splash for custom image in assets folder <a href='https://docs.expo.dev/tutorial/configuration/' target="_blank"> doc</a>. Expo build different icons version for devices</p>
   </div>

   <h3> 2. Build app Binaries with Expo's Cloud Service
   (advantages: no local resources used and we can build for all target platforms)
   with cloud services on their service can build on two platforms without mac </h3>
   <h3> 3. submit to app stores </h3>

### without expo

- configure project
- build app binaries locally, (for iOS, can be done in mac)
- submit to app stores

#### Build Expo App with EAS

<div>
<a href='https://docs.expo.dev/build/setup/'> build EAS</a>
1. Create account in expo
2. Login via terminal in expo -> eas login
4. Configure the project 
- run command:  eas build:configure

to test application
in eas.json add buildType: 'apk' inside "build": { preview:{"android":{"buildType": 'apk' }}...}
to test run preview

eas build -p android --profile preview
or for ios
eas build -p ios --profile preview

(this is just for testing mode not for production to publish in google app store )

- add unique identifier: for example: com.companyName.appName (after confirm, it will be added in eas.json)
- generate new Key store ( or add manually )

choose platform in which want to build, it will create eas.json file

- run a build: for android -> eas build --platform android
  for iOS eas build --platform ios

</div>

#### Build without expo (react-native)

##### iOS

(to publish app in app store , we need to have paid membership)

- open in expo xc-workspace folder
- add identifier
- change build number
- set up icon (Appicon)
- choose simulator version

- after build in info.plist folder , in exceptions remove localhost (for production )
- in product -> scheme -> add scheme change debug for release (for production)
- add appID in developer app , to register app and publish
- add app in app store connect
- click build
  after build , there is archive option available, via archive we connect app to store

##### Android

- generate key store <a href='https://reactnative.dev/docs/signed-apk-android'>key store</a>
- setting gradle <a href='https://reactnative.dev/docs/signed-apk-android#setting-up-gradle-variables'>variables</a> and singing config
- run command ./gradlew bundleRelease
- created app under app-> build-> generated->outputs ->release ->app.aab
- in google play console , create new application (app name , description etc)
- in production manage , create release, upload application

to add icons for application, do it via android studio, app-> res-> click new ->image assets

There, you can configure three important things:

- The App name as it appears on the home screen: <a href='https://stackoverflow.com/questions/5443304/how-to-change-an-android-apps-name'>change app name</a>

- The bundle identifier & package name of the app (also requires tweaking in other files): <a href='https://developer.android.com/studio/build/application-id'>app id</a>

- The permissions of the app: <a href='https://developer.android.com/guide/topics/manifest/manifest-intro#perms' target='_blank'>permission</a>

You should also set an app version and change it with every app update. This is done in the build.gradle file, see: <a href='https://developer.android.com/studio/publish/versioning'>versioning</a>

## Local Notifications

Notifications that are triggered by the installed app, for the local device

- not sent to any other user or devices
- are scheduled, delivered and handled on the same device (no server involved)

for android notification permission is added automatically , for iOS must be added special permission <a href='https://docs.expo.dev/versions/latest/sdk/notifications/#fetching-information-about-notifications-related-permissions'>permission</a>

- complete list (+ explanations) of content properties here: <a href='https://docs.expo.dev/versions/latest/sdk/notifications/#notificationcontentinput'>notificationcontentinput </a>

- And a complete list (+ explanations) of trigger properties here: <a href='https://docs.expo.dev/versions/latest/sdk/notifications/#notificationtriggerinput'>notificationtriggerinput</a>

The trigger type may be confusing - it's basically a combination of multiple supported object types.

- set an interval in seconds (as we did in the previous lecture) as described here: <a href='https://docs.expo.dev/versions/latest/sdk/notifications/#timeintervalnotificationtrigger'>time interval notification trigger</a>

- set a specific date (incl. time) at which the notification will be delivered: <a href='https://docs.expo.dev/versions/latest/sdk/notifications/#datetriggerinput'>data trigger input</a>

- set a daily time at which the notification will be sent (Android-only):<a href=' https://docs.expo.dev/versions/latest/sdk/notifications/#dailynotificationtrigger'>daily notification triger</a>

- set weekly trigger (Android-only): <a href='https://docs.expo.dev/versions/latest/sdk/notifications/#weeklynotificationtrigger'>weekly notification trigger</a>

- set a yearly trigger (Android-only): https://docs.expo.dev/versions/latest/sdk/notifications/#yearlynotificationtrigger

- set a specific date (iOS-only): <a href='https://docs.expo.dev/versions/latest/sdk/notifications/#calendarnotificationtrigger'>calendar notification trigger</a>

<p><a href='https://expo.dev/notifications'>Notification tool</a></p>
<p><a href=' https://docs.expo.dev/push-notifications/sending-notifications/#http2-api'>sending notification from device</a></p>
