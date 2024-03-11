import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { IFormFilter } from '../../components/Filter/Filter.type.';
// import { apiKey } from '../../apiKey';

interface fetchDataProps {
  pageNum: number;
  filterData: IFormFilter;
}

export const fetchFilmFilterThunk = createAsyncThunk(
  'filter/fetchFilmFilterThunk',
  async function fetchData(
    {
      pageNum: pageNum,
      filterData: { movieName, radioRatingYear, ratingFrom, ratingTo, yearsFrom, yearsTo, selectCountry, selectGenre },
    }: fetchDataProps,
    { rejectWithValue },
  ) {
    try {
      const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films?countries=${selectCountry}&genres=${selectGenre}&order=${radioRatingYear}&type=FILM&ratingFrom=${ratingFrom}&ratingTo=${ratingTo}&yearFrom=${yearsFrom}&yearTo=${yearsTo}&keyword=${movieName}&page=${pageNum}`;
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
