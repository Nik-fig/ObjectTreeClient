import {configureStore, combineReducers} from '@reduxjs/toolkit';

import {nodeApiSlice} from './api/NodeApi';
import treeSlice from './slices/treeSlice'

const rootReducer = combineReducers({
    [nodeApiSlice.reducerPath]: nodeApiSlice.reducer,
    tree: treeSlice,
})

const createStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware().concat(nodeApiSlice.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore['dispatch'];

export default createStore;