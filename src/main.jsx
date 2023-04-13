import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
import { searchCats } from './reducers';
import { Provider } from 'react-redux';
import App from './containers/App';
import './index.css';

const store = createStore(searchCats);
createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
