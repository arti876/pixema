import { createSlice } from '@reduxjs/toolkit';
import { fetchFilmId } from '../Thunk/fetchFilmId';

interface IFilmId {
  description: {
    kinopoiskId: number;
    countries: string[];
    genres: string[];
    poster: string;
    description: string;
    filmLength: number;
    nameRu: string;
    ratingKinopoisk: number;
    ratingImdb: number;
    year: number;
  };
  released: {
    date: string;
    production: [
      {
        name: string;
      },
    ];
  };
  boxOffice: [
    {
      type: string;
      amount: number;
      currencyCode: string;
      name: string;
      symbol: string;
    },
  ];
  recommendations: [
    {
      filmId: number;
      nameRu: string;
      posterUrl: string;
    },
  ];
  people: [
    {
      staffId: number;
      nameRu: string;
      professionText: string;
      professionKey: string;
    },
  ];
}

interface IFilmIdState {
  film: IFilmId;
  status: string | null;
  error: string | null | unknown;
}

const initialState: IFilmIdState = {
  film: {
    description: {
      kinopoiskId: 0,
      countries: [''],
      genres: [''],
      poster: '',
      description: '',
      filmLength: 0,
      nameRu: '',
      ratingKinopoisk: 0,
      ratingImdb: 0,
      year: 0,
    },
    released: {
      date: '',
      production: [
        {
          name: '',
        },
      ],
    },
    boxOffice: [
      {
        type: '',
        amount: 0,
        currencyCode: '',
        name: '',
        symbol: '',
      },
    ],
    recommendations: [
      {
        filmId: 0,
        nameRu: '',
        posterUrl: '',
      },
    ],
    people: [
      {
        staffId: 0,
        nameRu: '',
        professionText: '',
        professionKey: '',
      },
    ],
  },
  status: null,
  error: null,
};

const filmIdSlice = createSlice({
  name: 'filmId',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFilmId.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(fetchFilmId.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.film = action.payload;
    });
    builder.addCase(fetchFilmId.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    });
  },
});

export default filmIdSlice.reducer;
