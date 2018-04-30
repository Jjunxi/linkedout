import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import 'antd-mobile/dist/antd-mobile.min.css';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import reducers from './reducer';

import Routes from './routes';

const store = createStore(reducers, compose(
	applyMiddleware(thunk), // Async redux
	window.devToolsExtension ? window.devToolsExtension() : ()=>{}
))
ReactDOM.render(
    (<Provider store = {store}>
        <Routes />
     </Provider>
    ), 
    document.getElementById('root'));

registerServiceWorker();
