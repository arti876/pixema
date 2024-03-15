import { createSlice } from '@reduxjs/toolkit';
import { IPoster } from '../../components/Poster/IPoster.type';
import { fetchFilmsMain } from '../Thunk/fetchFilmsMain';
import { fetchNextPageFilms } from '../Thunk/fetchNextPageFilms';
import { fetchTrendsFilms } from '../Thunk/fetchTrendsFilms';
import { fetchFilterFilms } from '../Thunk/fetchFilterFilms';

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

interface IFilmsState {
  films: IPoster[];
  status: string | null;
  error: string | null | unknown;
  paramsThunk: IFilmThunkParams;
}

const initialState: IFilmsState = {
  films: [],
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

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    addFilterData: (state, action) => ({
      ...state,
      paramsThunk: {
        ...state.paramsThunk,
        ...action.payload,
      },
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilmsMain.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(fetchFilmsMain.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    });
    builder.addCase(fetchFilmsMain.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.films = action.payload;
      state.paramsThunk.page = 2;
    });
    builder.addCase(fetchTrendsFilms.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.films = action.payload;
      state.paramsThunk.page = 2;
    });
    builder.addCase(fetchNextPageFilms.fulfilled, (state, action) => {
      state.status = 'resolved';
      if (state.paramsThunk.page) {
        state.paramsThunk.page = state.paramsThunk.page + 1;
        state.films = state.films.concat(action.payload);
      }
    });
    builder.addCase(fetchFilterFilms.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.films = [].concat(action.payload);
      state.paramsThunk.page = 2;
    });
  },
});

export const { addFilterData } = filmsSlice.actions;

export default filmsSlice.reducer;
