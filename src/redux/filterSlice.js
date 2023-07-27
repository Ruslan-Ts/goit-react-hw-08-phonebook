const { createSlice } = require('@reduxjs/toolkit');

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (_, { payload }) => payload,
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
