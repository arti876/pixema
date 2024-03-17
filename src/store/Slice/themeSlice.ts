import { createSlice } from '@reduxjs/toolkit';
import { ThemeVariant } from '../../constants/ThemeVariant.constants';

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
      if (action.payload) {
        state.theme = ThemeVariant.LIGHT;
      } else {
        state.theme = ThemeVariant.DARK;
      }
    },
  },
});

export const { switchingTheme } = themeSlice.actions;

export default themeSlice.reducer;
