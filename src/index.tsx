import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from "@auth0/auth0-react";
import {config} from "./config";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={config.auth0_domain}
      clientId={config.auth0_client_id}
      redirectUri={config.auth0_redirect_uri}
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
