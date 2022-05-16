import { configureStore } from '@reduxjs/toolkit'
import { contactsFilterSlice } from './contactsFilterSlice'
import { persistedItemsReducer } from './contactsItemSlice'
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

export const store = configureStore({
    reducer: {
        items: persistedItemsReducer,
        filter: contactsFilterSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

