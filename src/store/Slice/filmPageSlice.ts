import { createSlice } from '@reduxjs/toolkit';

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
};

const filmIdSlice = createSlice({
  name: 'filmPage',
  initialState,
  reducers: {
    getFilmId: (state, action) => {
      state.film = action.payload;
    },
  },
});

export const { getFilmId } = filmIdSlice.actions;

export default filmIdSlice.reducer;
