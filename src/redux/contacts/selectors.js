import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts;
export const selectContactsList = state => state.contacts.contactsArr;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContactsList, selectFilter],
  (contactsArr, filter) => {
    return contactsArr.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
