import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilterQuery(state, action) {
          state = action.payload;
          return state
    },
  },
});

export const {setFilterQuery} = filterSlice.actions
export const filterReducer = filterSlice.reducer;