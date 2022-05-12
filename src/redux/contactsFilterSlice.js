import { createSlice } from '@reduxjs/toolkit';
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// Slice Filter
const initialState = { inputValue: '', };
export const contactsFilterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        addFilter: (state, action) => {
            state.inputValue = action.payload
        } 
    }
})
export const { addFilter } = contactsFilterSlice.actions;
// Persist Filter
const persistFilterConfig = {
    key: 'filter',
    storage,
};
export const persistedFilterReducer = persistReducer(persistFilterConfig, contactsFilterSlice.reducer);
// Selectors
export const getFilterValue = (state) => state.filter.inputValue;