import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppProvider from './components/AppProvider';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';

const totalApp = (

    <Provider store={store}>
        <AppProvider/>
    </Provider>

);

ReactDOM.render(totalApp, document.getElementById('root'));
registerServiceWorker();