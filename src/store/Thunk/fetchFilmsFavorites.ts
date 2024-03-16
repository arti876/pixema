import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

export const fetchFilmsFavorites = createAsyncThunk(
  'fetchFilmsFavorites',
  async function fetchFilmData(idFilm: number[], { rejectWithValue }) {
    try {
      const urls = idFilm.map((id) => `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`);

      // const urls = [
      //   `https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}`,
      //   `https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}/distributions`,
      //   `https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}/box_office`,
      //   `https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}/similars`,
      //   `https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${filmId}`,
      // ];

      const response = await axios.all(
        urls.map((url) =>
          axios.get(url, {
            method: 'GET',
            headers: {
              'X-API-KEY': process.env.REACT_APP_API_KEY_KINOPOISK,
              accept: 'application/json',
            },
          }),
        ),
      );

      const result = response.map(({ data }) => ({
        kinopoiskId: data?.kinopoiskId,
        nameRu: data?.nameRu,
        ratingKinopoisk: data?.ratingKinopoisk,
        ratingImdb: data?.ratingImdb,
        posterUrl: data?.posterUrl,
        genres: data?.genres.map(({ genre }: { genre: string }) => genre),
      }));
      console.log(result);
      // return response;
    } catch (error) {
      const errorFetch = error as AxiosError;
      return rejectWithValue(errorFetch.message);
    }
  },
);
