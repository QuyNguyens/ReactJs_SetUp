// import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import GlobalStyle from '@/components/globalStyles';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
// import { persistor, store } from './redux/store1.js/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <GlobalStyle>
                <App />
            </GlobalStyle>
        </PersistGate>
    </Provider>,
    // </React.StrictMode>,
);
