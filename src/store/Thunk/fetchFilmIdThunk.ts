import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
// import { apiKey } from '../../apiKey';

export const fetchFilmIdThunk = createAsyncThunk(
  'filmId/fetchFilmIdThunk',
  async function fetchFilmData(filmId: number, { rejectWithValue }) {
    try {
      const accept = 'application/json';

      const urls = [
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}`,
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}/distributions`,
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}/box_office`,
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}/similars`,
        `https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${filmId}`,
      ];

      const response = await axios.all(
        urls.map((url) =>
          axios.get(url, {
            method: 'GET',
            headers: {
              'X-API-KEY': apiKey,
              accept,
            },
          }),
        ),
      );
      return response;
    } catch (error) {
      const errorFetch = error as AxiosError;
      return rejectWithValue(errorFetch.message);
    }
  },
);

// 409424

// { data: description },
// { data: distributions },
// { data: boxOffice },
// { data: similars },
// { data: Recommendations },
