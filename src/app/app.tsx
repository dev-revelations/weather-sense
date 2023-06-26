import { getDevice } from 'framework7/lite/bundle';
import {
  App,
  View
} from 'framework7-react';
import { Provider } from 'react-redux';

import routes from './routes';
import { Framework7Parameters } from 'framework7/types';

import store from './store';

const MyApp = () => {
  const device = getDevice();
  // Framework7 Parameters
  const f7params = {
    name: 'WeatherSense', // App name
    theme: 'md', // Automatic theme detection
    colors: {
      primary: '#007aff',
    },
    darkMode: false,

    // App routes
    routes: routes,


    // Input settings
    input: {
      scrollIntoViewOnFocus: device.capacitor,
      scrollIntoViewCentered: device.capacitor,
    },
    // Capacitor Statusbar settings
    statusbar: {
      iosOverlaysWebView: true,
      androidOverlaysWebView: false,
    },

  } as Framework7Parameters;

  return (
    <Provider store={store}>
      <App {...f7params} className={device.ios ? 'safe-area-top' : ''}>
        <View main url="/"/>
        
      </App>
    </Provider>
  );
};
export default MyApp;