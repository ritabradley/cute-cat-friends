import React from 'react';
import { createRoot } from 'react-dom/client';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { searchCats } from './reducers';
import { Provider } from 'react-redux';
import App from './containers/App';
import './index.css';

const logger = createLogger();

const store = createStore(searchCats, composeWithDevTools(applyMiddleware(logger)));
createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
