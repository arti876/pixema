import { createSlice } from '@reduxjs/toolkit';
import { IPoster } from '../../components/Poster/IPoster.type';
import { fetchFilmTrends } from '../Thunk/fetchFilmTrends';

interface IFilmTrendsState {
  film: IPoster[];
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
    builder.addCase(fetchFilmTrends.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(fetchFilmTrends.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.film = state.film.concat(action.payload);
    });
    builder.addCase(fetchFilmTrends.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    });
  },
});

export const { countPage } = filmTrendsSlice.actions;

export default filmTrendsSlice.reducer;
