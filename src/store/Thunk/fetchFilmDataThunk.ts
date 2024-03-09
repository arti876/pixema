import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
// import { apiKey } from '../../apiKey';

export const fetchFilmTrendsThunk = createAsyncThunk(
  'filmTrends/fetchFilmTrendsThunk',
  async function fetchFilmData(filmId: number, { rejectWithValue }) {
    try {
      const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}`;
      const accept = 'application/json';
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

// 409424
