import { createSlice } from '@reduxjs/toolkit';
import { ThemeVariant } from '..';

interface IThemeState {
  theme: string;
}

const initialState: IThemeState = {
  theme: ThemeVariant.DARK,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchingTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { switchingTheme } = themeSlice.actions;

export default themeSlice.reducer;
