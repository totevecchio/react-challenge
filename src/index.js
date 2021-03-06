import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.AUTH0_DOMAIN;
const clientId = process.env.AUTH0_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider
    domain="dev-iyg3qg-t.us.auth0.com"
    clientId="WK1TQYjP3PntzTs8RdPgtFVsdhaaDtct"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
