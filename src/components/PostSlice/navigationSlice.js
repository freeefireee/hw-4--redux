// navigationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  path: null,
  history: [],
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    updatePath: (state, action) => {
      state.path = action.payload;
      state.history.push(action.payload);
    },
  },
});

export const { updatePath } = navigationSlice.actions;
export default navigationSlice.reducer;
