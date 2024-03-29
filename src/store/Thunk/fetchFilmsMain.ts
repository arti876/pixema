import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

export const fetchFilmsMain = createAsyncThunk(
  'fetchFilmsMain',
  async function fetchFilmData(_, { rejectWithValue }) {
    try {
      const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films?type=FILM`;
      const response = await axios.get(url, {
        method: 'GET',
        headers: {
          'X-API-KEY': process.env.REACT_APP_API_KEY_KINOPOISK,
          accept: 'application/json',
        },
      });
      return response.data.items;
    } catch (error) {
      const errorFetch = error as AxiosError;
      return rejectWithValue(errorFetch.message);
    }
  },
);
