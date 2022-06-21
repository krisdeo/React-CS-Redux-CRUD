import React from 'react';
import ReactDOM from 'react-dom/client';
//Yang bootstrap css harus diatas untuk classname karena akan berpengaruh pada bootstrap css nya
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './index.css'; 
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
import rootReducer from './reducers';

// const store = createStore(rootReducer, applyMiddleware(thunk))

const store = createStore(reducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
