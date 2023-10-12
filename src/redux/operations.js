import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAll, addItem, deleteItem } from '../services/api';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', () =>
  fetchAll()
);

export const addContact = createAsyncThunk('contacts/addContact', contact => {
  const [name, phone] = contact;
  addItem(name, phone);
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', id =>
  deleteItem(id)
);
