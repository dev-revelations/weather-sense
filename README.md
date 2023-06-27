# WeatherSense

## Screenshots

<img src="https://github.com/dev-revelations/weather-sense/assets/76188497/2ff8c9b8-2e51-45a0-9ef0-7ee26c10a8e3" width="200px">
<img src="https://github.com/dev-revelations/weather-sense/assets/76188497/fece4f64-e903-442d-b9e8-66cb72270db5" width="200px">
<img src="https://github.com/dev-revelations/weather-sense/assets/76188497/689cad62-5d44-4e5e-a61d-29a6b9edf098" width="200px">
<img src="https://github.com/dev-revelations/weather-sense/assets/76188497/ec9989e8-022f-4f30-a4ff-de8d8751314f" width="200px">

## Tech Stack
- React
- Typescript
- Framework7
- Ionic Capacitor
- Redux Toolkit

## API
The Following OpenWeatherMap API endpoints are being used in the project:
- /data/2.5/weather
  - To fetch the current weather
- /data/3.0/onecall
  - To fetch the daily forecast
 
## The Main Focuses of The Current Implementation
- App code architecture for scalability
- Core required functionalities

## Implemented Features
- City Input
- Current Weather
- Weather Forecast
- Geolocation handling
- Data Storage
- Offline First

## Unimplemented Features
- Local Notifications
- Accessibility features

## Production Suggestions
- To protect API keys, proxy endpoints need to be implemented between the OpenWeatherMap API and the app.
- Using dependency injection for better code scalability & testability
- Logging & monitoring using Mixpanel
- Crash/Error reports using Sentry
- CI/CD using Ionic Appflow


## Install Dependencies

First of all we need to install dependencies, run in terminal
```
npm install
```
## Environment Variables

Rename `.env.example` to `.env` , and set the API key for the OpenWeatherMap API.

## Capacitor

This project created with Capacitor support. And first thing required before start is to add capacitor platforms, run in terminal:

```
npx cap add ios && npx cap add android
```

Check out [official Capacitor documentation](https://capacitorjs.com) for more examples and usage examples.


## NPM Scripts

* 🔥 `start` - run development server
* 🔧 `dev` - run development server
* 🔧 `build` - build web app for production
* 📱 `build-capacitor-ios` - build app and copy it to iOS capacitor project
* 📱 `build-capacitor-android` - build app and copy it to Android capacitor project

## To Run The App on Devices/Emulators
- iOS
  - `npx cap run ios`
- Android
  - `npx cap run android`

## Vite

There is a [Vite](https://vitejs.dev) bundler setup. It compiles and bundles all "front-end" resources. You should work only with files located in `/src` folder. Vite config located in `vite.config.js`.


