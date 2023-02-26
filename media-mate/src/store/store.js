import authReducer from './slices/authSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({

    reducer: {
        auth: authReducer
    },
    devTools: true
})