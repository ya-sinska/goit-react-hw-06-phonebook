import { createSlice } from '@reduxjs/toolkit'
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// Slice Items
const initialState = {
  value: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
}
export const contactsItemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addContactsItem: (state, action) => {
            const isIncludesName = state.value.find(
                item => item.name.toLowerCase() === action.payload.name.toLowerCase()
            );
            if (isIncludesName) {
                return alert(`${action.payload.name} is already is contacts`);
            }
            state.value.push(action.payload)
        },
        deleteContactsItem: (state, action) => {
            state.value = state.value.filter(item => item.id !== action.payload) 
        }      
    }   
});
export const { addContactsItem, deleteContactsItem } = contactsItemSlice.actions;
// Persist
const persistItemsConfig = {
    key: 'items',
    storage,
};
export const persistedItemsReducer = persistReducer(persistItemsConfig, contactsItemSlice.reducer);
// Selectors
export const getItemsValue = (state) => state.items.value;