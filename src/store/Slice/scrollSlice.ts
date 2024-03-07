import { createSlice } from '@reduxjs/toolkit';

interface IThemeState {
  scrollPosition: number;
}

const initialState: IThemeState = {
  scrollPosition: 0,
};

const scrollSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    scrollPositionSave: (state, action) => {
      state.scrollPosition = action.payload;
    },
  },
});

export const { scrollPositionSave } = scrollSlice.actions;

export default scrollSlice.reducer;
