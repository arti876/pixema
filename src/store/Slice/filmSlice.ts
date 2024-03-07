import { createSlice } from '@reduxjs/toolkit';
import { IFilm } from '../..';
import { fetchFilmThunk } from '../Thunk/fetchFilmThunk';

interface IFilmState {
  film: IFilm[];
  status: string | null;
  error: unknown;
  mainPage: number;
}

const initialState: IFilmState = {
  film: [],
  status: null,
  error: null,
  mainPage: 1,
};

const filmSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {
    countMainPage: (state, action) => {
      state.mainPage = state.mainPage + action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilmThunk.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(fetchFilmThunk.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.film = state.film.concat(action.payload);
    });
    builder.addCase(fetchFilmThunk.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    });
  },
});

export const { countMainPage } = filmSlice.actions;

export default filmSlice.reducer;
