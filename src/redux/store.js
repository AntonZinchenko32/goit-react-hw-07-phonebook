import { configureStore } from '@reduxjs/toolkit';

// Slices
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';



export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer
  }
});


