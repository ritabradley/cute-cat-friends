import React from 'react';
import { createRoot } from 'react-dom/client';
import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { searchCats, requestCats } from './reducers';
import { Provider } from 'react-redux';
import App from './containers/App';
import './index.css';

const logger = createLogger();

const rootReducer = combineReducers({ searchCats, requestCats });

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware, logger)));
createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
