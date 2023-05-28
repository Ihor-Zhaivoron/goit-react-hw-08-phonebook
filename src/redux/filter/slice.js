import { createSlice } from '@reduxjs/toolkit';

const filterSlicer = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(state, action) {
      return action.payload;
    },
    clearFilter(state, action) {
      return '';
    },
  },
});

export const filterReducer = filterSlicer.reducer;
export const { changeFilter, clearFilter } = filterSlicer.actions;
