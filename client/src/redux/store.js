import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './reducers/counterSlice';
import todoSlice from './reducers/todoSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['todos'],
};

const rootReducer = combineReducers({
    counter: counterSlice,
    todos: todoSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
