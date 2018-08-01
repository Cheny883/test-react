import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import React,{Component} from 'react';
import App from "./container/connectApp";
import store from "./store";
import './sass/style.scss'
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,document.body);
