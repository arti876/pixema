import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { apiKey } from '../../apiKey';

export const fetchFilmMain = createAsyncThunk(
  'filmMain/fetchFilmMain',
  async function fetchFilmData(_, { rejectWithValue }) {
    try {
      const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films?type=FILM`;
      const response = await axios.get(url, {
        method: 'GET',
        headers: {
          'X-API-KEY': apiKey,
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
