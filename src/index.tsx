// Import React and ReactDOM
import React from 'react';
import { createRoot } from 'react-dom/client';

// Import Framework7
import Framework7 from 'framework7/lite/bundle';

// Import Framework7-React Plugin
import Framework7React, { f7ready, f7 } from 'framework7-react';

// Import Framework7 Styles
import 'framework7/css/bundle';

import capacitorApp from './js/capacitor-app';

// Import Icons and App Custom Styles
import './css/icons.css';
import './css/app.scss';

// Import App Component
import App from './app/app';


// Init F7 React Plugin
Framework7.use(Framework7React);

// Mount React App
const root = createRoot(document.getElementById('app') as HTMLElement);
root.render(React.createElement(App));

f7ready(() => {

    // Init capacitor APIs (see capacitor-app.js)
    if (f7.device.capacitor) {
        capacitorApp.init(f7);
    }
    // Call F7 APIs here
});