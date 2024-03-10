import { createSlice } from '@reduxjs/toolkit';
import { IPoster } from '../../constants/IPoster.constants';
import { fetchFilmMainThunk } from '../Thunk/fetchFilmMainThunk';

interface IFilmMainState {
  mainFilm: IPoster[];
  mainStatus: string | null;
  mainError: string | null | unknown;
  mainPage: number;
}

const initialState: IFilmMainState = {
  mainFilm: [],
  mainStatus: null,
  mainError: null,
  mainPage: 1,
};

const filmMainSlice = createSlice({
  name: 'filmMain',
  initialState,
  reducers: {
    countMainPage: (state, action) => {
      state.mainPage = state.mainPage + action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilmMainThunk.pending, (state) => {
      state.mainStatus = 'loading';
      state.mainError = null;
    });
    builder.addCase(fetchFilmMainThunk.fulfilled, (state, action) => {
      state.mainStatus = 'resolved';
      state.mainFilm = state.mainFilm.concat(action.payload);
    });
    builder.addCase(fetchFilmMainThunk.rejected, (state, action) => {
      state.mainStatus = 'rejected';
      state.mainError = action.payload;
    });
  },
});

export const { countMainPage } = filmMainSlice.actions;

export default filmMainSlice.reducer;
