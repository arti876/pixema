import { createSlice } from '@reduxjs/toolkit';
import { ThemeVariant } from '../..';

interface IThemeState {
  theme: string;
}

const initialState: IThemeState = {
  theme: ThemeVariant.DARK,
};

const scrollSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchingTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { switchingTheme } = scrollSlice.actions;

export default scrollSlice.reducer;
