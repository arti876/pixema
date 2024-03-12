import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
// import { apiKey } from '../../apiKey';

export const fetchFilmMainThunk = createAsyncThunk(
  'filmMain/fetchFilmMainThunk',
  async function fetchFilmData(params, { rejectWithValue }) {
    const {
      countries = '',
      genres = '',
      order = 'RATING',
      ratingFrom = '',
      ratingTo = '',
      yearFrom = '',
      yearTo = '2024',
      keyword = '',
      page = '1',
    } = params;

    try {
      const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films?type=FILM&order=RATING&yearTo=2024&page=${pageNum}`;
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

// https://kinopoiskapiunofficial.tech/images/posters/kp/1144194.jpg posterUrl

// export const fetchFilmMainThunk = createAsyncThunk(
//   'filmMain/fetchFilmMainThunk',
//   async function fetchFilmData(_, { rejectWithValue }) {
//     try {
//       const url = `http://localhost:3000/items`;
//       const response = await axios.get(url);
//       return response.data;
//     } catch (error) {
//       const errorFetch = error as AxiosError;
//       return rejectWithValue(errorFetch.message);
//     }
//   },
// );
