import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { IParamsThunkMainPage } from '../Slice/filmMainSlice';
import { apiKey } from '../../apiKey';

export const fetchFilmMain = createAsyncThunk(
  'filmMain/fetchFilmMain',
  async function fetchFilmData(params: IParamsThunkMainPage, { rejectWithValue }) {
    const paramsToString = new URLSearchParams(params).toString();
    console.log(paramsToString);
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

// export const fetchFilmMain = createAsyncThunk(
//   'filmMain/fetchFilmMain',
//   async function fetchFilmData(params: IParamsThunkMainPage, { rejectWithValue }) {
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
