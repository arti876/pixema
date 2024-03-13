import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { IParamsThunkMainPage } from '../Slice/filmMainSlice';

import { apiKey } from '../../apiKey';

export const fetchFilm = (fetchId: string, url: string, params?: IParamsThunkMainPage) => {
  return createAsyncThunk(fetchId, async function fetchData(_, { rejectWithValue }) {
    const paramsToString = new URLSearchParams(params).toString();
    const customUrl = url + paramsToString;
    try {
      const response = await axios.get(customUrl, {
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
  });
};

const fetchId = 'filmMain/fetchFilmMain';
const url = 'https://kinopoiskapiunofficial.tech/api/v2.2/films?type=FILM&';

export const fetchFilmMainNew = fetchFilm(fetchId, url);

// export const fetchFilmMain = createAsyncThunk(
//   'filmMain/fetchFilmMain',
//   async function fetchFilmData(params: IParamsThunkMainPage, { rejectWithValue }) {
//     const paramsToString = new URLSearchParams(params).toString();
//     console.log(paramsToString);
//     try {
//       const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films?type=FILM&${paramsToString}`;
//       const accept = 'application/json';
//       const response = await axios.get(url, {
//         method: 'GET',
//         headers: {
//           'X-API-KEY': apiKey,
//           accept,
//         },
//       });
//       return response.data.items;
//     } catch (error) {
//       const errorFetch = error as AxiosError;
//       return rejectWithValue(errorFetch.message);
//     }
//   },
// );
