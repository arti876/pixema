import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { IFilmThunkParams } from '../Slice/filmSlice';
import { RoutePath } from '../../constants/RoutePath.constants';

import { apiKey } from '../../apiKey';

interface IfetchFilmNextPage {
  params: IFilmThunkParams;
  location: string;
}

export const fetchFilmNextPage = createAsyncThunk(
  'filmMain/fetchFilmNextPage',
  async function fetchFilmData({ params, location }: IfetchFilmNextPage, { rejectWithValue }) {
    const paramsToString = new URLSearchParams(params).toString();
    try {
      const url =
        location === RoutePath.ROOT
          ? `https://kinopoiskapiunofficial.tech/api/v2.2/films?type=FILM&${paramsToString}`
          : `https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&${paramsToString}`;
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
