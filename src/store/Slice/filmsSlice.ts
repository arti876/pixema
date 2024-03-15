import { createSlice } from '@reduxjs/toolkit';
import { IPoster } from '../../components/Poster/IPoster.type';

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
    errorNull: (state) => {
      state.error = null;
    },
    statusLoading: (state) => {
      state.status = 'loading';
    },
    statusShowMore: (state) => {
      state.status = 'showMore';
    },
    statusRejected: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
    statusResolved: (state) => {
      state.status = 'resolved';
    },
    currentPage: (state, action) => {
      state.paramsThunk.page = action.payload;
    },
    nextPage: (state) => {
      if (state.paramsThunk.page) {
        state.paramsThunk.page = state.paramsThunk.page + 1;
      }
    },
    addPage: (state, action) => {
      state.films = state.films.concat(action.payload);
    },
    nullPage: (state) => {
      state.films = [];
    },
    resolvedFirstPage: (state, action) => {
      state.films = action.payload;
    },
  },
});

export const {
  statusResolved,
  currentPage,
  nextPage,
  nullPage,
  errorNull,
  addFilterData,
  statusLoading,
  statusRejected,
  statusShowMore,
  resolvedFirstPage,
  addPage,
} = filmsSlice.actions;

export default filmsSlice.reducer;
