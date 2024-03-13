import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { apiKey } from '../../apiKey';
import { IFilmThunkParams } from '../Slice/filmSlice';

export const fetchFilmTrends = createAsyncThunk(
  'filmTrends/fetchFilmTrends',
  async function fetchFilmData(params: IFilmThunkParams, { rejectWithValue }) {
    const paramsToString = new URLSearchParams(params).toString();
    try {
      const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&${paramsToString}`;
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
