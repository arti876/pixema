import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { IFilmThunkParams } from '../Slice/filmsSlice';
import { RoutePath } from '../../constants/RoutePath.constants';

interface fetchFilmNextPageParams {
  params: IFilmThunkParams;
  location: string;
}

export const fetchNextPageFilms = createAsyncThunk(
  'fetchNextPageFilms',
  async function fetchFilmData({ params, location }: fetchFilmNextPageParams, { rejectWithValue }) {
    const paramsToString = new URLSearchParams(params).toString();
    try {
      const url =
        location === RoutePath.ROOT
          ? `https://kinopoiskapiunofficial.tech/api/v2.2/films?type=FILM&${paramsToString}`
          : `https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&${paramsToString}`;
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
