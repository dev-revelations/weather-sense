import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import weatherReducer from './features/weatherSlice';

const store = configureStore({
    reducer: {
        weathers: weatherReducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;