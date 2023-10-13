import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectFilterQuery = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilterQuery],
  (contacts, filterQuery) => {
    if (filterQuery === '') return contacts;
    else {
      const filtredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterQuery.toLowerCase())
      );

      return filtredContacts;
    }
  }
);
