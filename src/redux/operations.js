import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAll, addItem, deleteItem } from '../services/api';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', () =>
  fetchAll()
);

export const addContact = createAsyncThunk('contacts/addContact', () =>
  addItem()
);

export const deleteContact = createAsyncThunk('contacts/deleteContact', () =>
  deleteItem()
);
