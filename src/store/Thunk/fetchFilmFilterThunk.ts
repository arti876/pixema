import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { IFilter } from '../../components/Filter/Filter.type.';
import { apiKey } from '../../apiKey';

interface fetchDataProps {
  pageNum: number;
  filterData: IFilter;
}

// // Данные для фильтрации
// const filters = {
//   type: 'FILM',
//   countries: selectCountry,
//   genres: selectGenre,

//   order: radioRatingYear,
//   ratingFrom: ratingFrom,
//   ratingTo: ratingTo,
//   yearFrom: yearsFrom,
//   yearTo: yearsTo,
//   keyword: movieName,
//   page: pageNum,
// };

// // Преобразование объекта с фильтрами в строку параметров запроса
// const params = new URLSearchParams(filters).toString();

export const fetchFilmFilterThunk = createAsyncThunk(
  'filter/fetchFilmFilterThunk',
  async function fetchData(params: fetchDataProps, { rejectWithValue }) {
    try {
      const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films?${params}`;
      const accept = 'application/json';
      const response = await axios.get(url, {
        method: 'GET',
        headers: {
          'X-API-KEY': apiKey,
          accept,
        },
      });
      return response.data;
    } catch (error) {
      const errorFetch = error as AxiosError;
      return rejectWithValue(errorFetch.message);
    }
  },
);
