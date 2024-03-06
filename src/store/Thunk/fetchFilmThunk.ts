import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { apiKey } from '../../apiKey';

const url =
  'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=1';

const accept = 'application/json';

export const fetchFilmThunk = createAsyncThunk(
  'film/fetchFilmThunk',
  async function fetchFilmData(_, { rejectWithValue }) {
    try {
      const response = await axios.get(url, {
        method: 'GET',
        headers: {
          'X-API-KEY': apiKey,
          accept,
        },
      });
      return response.data.items;
    } catch (error) {
      const errorFetch = error as AxiosError;

      return rejectWithValue(errorFetch.message);
    }
  },
);
