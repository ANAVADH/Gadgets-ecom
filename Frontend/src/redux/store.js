import {configureStore} from '@reduxjs/toolkit'

import userReducer from './AuthRedux'

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage';

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

//   const rootReducers = combineReducers({user:userReducer})
  
  const persistedReducer = persistReducer(persistConfig, userReducer )

export const store = configureStore ({
 reducer:persistedReducer,
       middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
})


export let persistor = persistStore(store)