import { createSlice } from '@reduxjs/toolkit';
import { ThemeVariant } from '../../constants/ThemeVariant.constants';

interface IThemeState {
  theme: string;
  toggle: boolean;
}

const initialState: IThemeState = {
  theme: ThemeVariant.DARK,
  toggle: true,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchingTheme: (state) => {
      if (state.toggle) {
        state.theme = ThemeVariant.LIGHT;
        state.toggle = false;
      } else {
        state.theme = ThemeVariant.DARK;
        state.toggle = true;
      }
    },
    nullTheme: (state) => {
      state.theme = ThemeVariant.DARK;
      state.toggle = true;
    },
  },
});

export const { switchingTheme, nullTheme } = themeSlice.actions;

export default themeSlice.reducer;
