import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { countReducer } from './reducers/countReducer';
import { todoReducer } from './reducers/todoReducer';
import { thunk } from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['todos'],
};

const rootReducer = combineReducers({
    count: countReducer,
    todos: todoReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);
