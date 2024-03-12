import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
// import { apiKey } from '../../apiKey';

export const fetchFilmTrendsThunk = createAsyncThunk(
  'filmTrends/fetchFilmTrendsThunk',
  async function fetchFilmData(pageNum: number, { rejectWithValue }) {
    try {
      const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films?type=FILM&order=NUM_VOTE&yearFrom=2023&yearTo=2024&page=${pageNum}`;
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
