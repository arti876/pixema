import { createSlice } from '@reduxjs/toolkit';
import { IFilm } from '../../constants/IFilm.constants';
import { fetchFilmTrendsThunk } from '../Thunk/fetchFilmTrendsThunk';

interface IFilmTrendsState {
  film: IFilm[];
  status: string | null;
  error: string | null | unknown;
  page: number;
}

const initialState: IFilmTrendsState = {
  film: [],
  status: null,
  error: null,
  page: 1,
};

const filmTrendsSlice = createSlice({
  name: 'filmTrends',
  initialState,
  reducers: {
    countPage: (state, action) => {
      state.page = state.page + action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilmTrendsThunk.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(fetchFilmTrendsThunk.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.film = state.film.concat(action.payload);
    });
    builder.addCase(fetchFilmTrendsThunk.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    });
  },
});

export const { countPage } = filmTrendsSlice.actions;

export default filmTrendsSlice.reducer;
