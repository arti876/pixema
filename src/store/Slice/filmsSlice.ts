import { createSlice } from '@reduxjs/toolkit';
import { IPoster } from '../../components/Poster';
import { Locales } from '../../constants/Locales.constants';

export interface IFilmThunkParams {
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
  filterActive: boolean;
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
  filterActive: false,
};

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    toggleFilter: (state, action) => {
      state.filterActive = action.payload;
    },
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
      state.status = Locales.STATUS_LOADING;
    },
    statusShowMore: (state) => {
      state.status = Locales.STATUS_SHOW_MORE;
    },
    statusRejected: (state, action) => {
      state.status = Locales.STATUS_REJECTED;
      state.error = action.payload;
    },
    statusResolved: (state) => {
      state.status = Locales.STATUS_RESOLVED;
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
  toggleFilter,
} = filmsSlice.actions;

export default filmsSlice.reducer;
