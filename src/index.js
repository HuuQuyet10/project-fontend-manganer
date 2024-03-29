import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter
} from "react-router-dom";


// REDUX
import { Provider } from "react-redux";
import { store } from "../src/redux/store";


// CSS LIB
import 'antd/dist/antd.css';
import './Styles/Styles_global.css';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
