import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAll, addItem, deleteItem } from '../services/api';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', () =>
  fetchAll()
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  ({ name, phone }) => addItem(name, phone)
);

export const deleteContact = createAsyncThunk('contacts/deleteContact', id =>
  deleteItem(id)
);
