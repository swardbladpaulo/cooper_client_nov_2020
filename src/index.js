import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';

let apiUrl;
//if (process.env.NODE_ENV === "production") {
  apiUrl = "https://sp-cooper-api.herokuapp.com/api/v1";
//} else {
//  apiUrl = "http://localhost:3000/api/v1";
//}
axios.defaults.baseURL = apiUrl;

ReactDOM.render(<App />, document.getElementById("root"));

reportWebVitals();

//I need to comment out line 10,12,13,14 to be able to login, otherwise it default to the else statement
