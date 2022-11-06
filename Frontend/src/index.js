import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";


import { Auth0Provider } from "@auth0/auth0-react";



import App from './App';
// const domain = process.env.AUTH0_DOMAIN;
// const clientId = process.env.AUTH0_CLIENT_ID;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Auth0Provider
    domain="dev-n0txw1l1pbv5ljmq.us.auth0.com"
    clientId="N7sUOhPPpvw1aKMsWWzGgmRGCD6T67SC"
    redirectUri={window.location.origin}
  >
    <App />
    </Auth0Provider>
   
    </BrowserRouter>

);



