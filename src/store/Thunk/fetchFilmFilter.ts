import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { IFilmThunkParams } from '../Slice/filmSlice';
import { apiKey } from '../../apiKey';

export const fetchFilmFilter = createAsyncThunk(
  'filter/fetchFilmFilter',
  async function fetchData(params: IFilmThunkParams, { rejectWithValue }) {
    console.log(params);
    const paramsToString = new URLSearchParams(params).toString();
    try {
      const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films?type=FILM&${paramsToString}`;
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
