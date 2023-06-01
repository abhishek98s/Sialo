import { configureStore, combineReducers } from '@reduxjs/toolkit'
import postReducer from './counter/postSlice'
import loginReducer from './counter/loginSlice'
import themeReducer from './counter/themeSlice'


import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import storageSession from 'redux-persist/lib/storage/session';

const persistConfig = {
    key: 'posts',
    storage: storageSession,
}

const localPersistConfig = {
    key: 'login',
    storage: storage,
}

const rootReducer = combineReducers({
    posts: persistReducer(persistConfig, postReducer),
    login: persistReducer(localPersistConfig, loginReducer),
    theme: themeReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)



export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch