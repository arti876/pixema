import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { IFilmThunkParams } from '../Slice/filmsSlice';

export const fetchFilterFilms = createAsyncThunk(
  'fetchFilterFilms',
  async function fetchData(params: IFilmThunkParams, { rejectWithValue }) {
    const paramsToString = new URLSearchParams(params).toString();
    try {
      const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films?type=FILM&${paramsToString}`;
      const accept = 'application/json';
      const response = await axios.get(url, {
        method: 'GET',
        headers: {
          'X-API-KEY': process.env.REACT_APP_API_KEY_KINOPOISK,
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
