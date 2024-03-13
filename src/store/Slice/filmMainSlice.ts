import { createSlice } from '@reduxjs/toolkit';
import { IPoster } from '../../components/Poster/IPoster.type';
import { fetchFilmMain } from '../Thunk/fetchFilmMain';
import { fetchFilmMainNew } from '../Thunk/fecthFilm';

export interface IParamsThunkMainPage {
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

interface IFilmMainState {
  film: IPoster[];
  status: string | null;
  error: string | null | unknown;
  paramsThunk: IParamsThunkMainPage;
}

const initialState: IFilmMainState = {
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

const filmMainSlice = createSlice({
  name: 'filmMain',
  initialState,
  reducers: {
    addFilterData: (state, action) => ({
      ...state,
      paramsThunk: action.payload,
    }),
    addNextPage: (state, action) => {
      if (state.paramsThunk.page) {
        // state.film = state.film.concat(action.payload);
        state.paramsThunk.page = state.paramsThunk.page + 1;
      }
    },
    updateFilmData: (state) => {
      state.status = 'resolved';
      state.film = state.film.concat(state.film);
      if (state.paramsThunk.page) {
        state.paramsThunk.page = state.paramsThunk.page + 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilmMainNew.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(fetchFilmMainNew.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.film = action.payload;
    });
    builder.addCase(fetchFilmMainNew.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    });
  },
});

export const { addFilterData, addNextPage, updateFilmData } = filmMainSlice.actions;

export default filmMainSlice.reducer;
