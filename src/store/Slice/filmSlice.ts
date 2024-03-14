import { createSlice } from '@reduxjs/toolkit';
import { IPoster } from '../../components/Poster/IPoster.type';
import { fetchFilmMain } from '../Thunk/fetchFilmMain';
import { fetchFilmNextPage } from '../Thunk/fetchFilmNextPage';
import { fetchFilmTrends } from '../Thunk/fetchFilmTrends';
import { fetchFilmFilter } from '../Thunk/fetchFilmFilter';

export interface IFilmThunkParams {
  // [key: string]: string;
  countries: string;
  genres: string;
  order: string;
  ratingFrom: string;
  ratingTo: string;
  yearFrom: string;
  yearTo: string;
  keyword: string;
  page?: number;
}

interface IFilmState {
  film: IPoster[];
  status: string | null;
  error: string | null | unknown;
  paramsThunk: IFilmThunkParams;
}

const initialState: IFilmState = {
  film: [],
  status: null,
  error: null,
  paramsThunk: {
    countries: '',
    genres: '',
    order: 'RATING',
    ratingFrom: '',
    ratingTo: '',
    yearFrom: '',
    yearTo: '2024',
    keyword: '',
    page: 1,
  },
};

const filmSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {
    addFilterData: (state, action) => ({
      ...state,
      paramsThunk: {
        ...state.paramsThunk,
        ...action.payload,
      },
    }),
    // currentPage: (state, action) => {
    //   state.paramsThunk.page = action.payload;
    // },
    // clearDataFilm: (state) => {
    //   state.film = [];
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilmMain.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(fetchFilmMain.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    });
    builder.addCase(fetchFilmMain.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.film = action.payload;
      state.paramsThunk.page = 2;
    });
    builder.addCase(fetchFilmTrends.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.film = action.payload;
      state.paramsThunk.page = 2;
    });
    builder.addCase(fetchFilmNextPage.fulfilled, (state, action) => {
      state.status = 'resolved';
      if (state.paramsThunk.page) {
        state.paramsThunk.page = state.paramsThunk.page + 1;
        state.film = state.film.concat(action.payload);
      }
    });
    builder.addCase(fetchFilmFilter.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.film = [].concat(action.payload);
      state.paramsThunk.page = 2;
    });
  },
});

export const { addFilterData } = filmSlice.actions;

export default filmSlice.reducer;
