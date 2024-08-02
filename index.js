import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import NetflixIndexComponent from './Components/NetflixIndexComponent';
import NetflixRegisterComponent from './Components/NetflixRegisterComponent';
import NetflixHeaderComponent from './Components/NetflixHeaderComponent';
import RegistrationComponent from './Components/RegisterComponent';
//import DataBindingComponent from './Components/DataBindingComponent';
import ShoppingComponent from './Components/ShoppingComponent';
//import EventBindingComponent from './Components/EventBindindComponent';
import TwoWayBinding from './Components/TwoWayBinding';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
   <ShoppingComponent/>
  </React.StrictMode>
);
//<TwoWayBinding />
//<DataBindingComponent />

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
