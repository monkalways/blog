import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';

import 'semantic-ui-css/semantic.min.css';

import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';
import AppRouter from './router/AppRouter';

const history = createHistory();
const store = configureStore(history);

ReactDOM.render(
    <Provider store={store}>
        <AppRouter history={history} />
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
