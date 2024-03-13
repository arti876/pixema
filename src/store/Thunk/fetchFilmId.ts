import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
// import { apiKey } from '../../apiKey';

export const fetchFilmId = createAsyncThunk(
  'filmId/fetchFilmId',
  async function fetchFilmData(filmId: number, { rejectWithValue }) {
    try {
      const urls = [
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}`,
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}/distributions`,
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}/box_office`,
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}/similars`,
        `https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${filmId}`,
      ];

      const response = await axios.all(
        urls.map((url) =>
          axios.get(url, {
            method: 'GET',
            headers: {
              'X-API-KEY': apiKey,
              accept: 'application/json',
            },
          }),
        ),
      );

      const dataDescription = response[0].data;
      const dataDistributions = response[1].data.items[0];
      const dataBoxOffice = response[2].data.items;
      const dataSimilars = response[3].data.items;
      const dataPeople = response[4].data;

      const description = {
        kinopoiskId: dataDescription?.kinopoiskId,
        countries: dataDescription?.countries.map(({ country }: { country: string }) => country),
        genres: dataDescription?.genres.map(({ genre }: { genre: string }) => genre),
        poster: dataDescription?.posterUrl,
        description: dataDescription?.description,
        filmLength: dataDescription?.filmLength,
        nameRu: dataDescription?.nameRu,
        ratingKinopoisk: dataDescription?.ratingKinopoisk,
        ratingImdb: dataDescription?.ratingImdb,
        year: dataDescription?.year,
      };

      const released = {
        date: dataDistributions?.date,
        production: dataDistributions?.companies,
      };

      const boxOffice = dataBoxOffice;

      const recommendations = dataSimilars.map(
        ({ filmId, nameRu, posterUrl }: { filmId: number; nameRu: string; posterUrl: string }) => ({
          filmId,
          nameRu,
          posterUrl,
        }),
      );

      const people = dataPeople.map(
        ({
          staffId,
          nameRu,
          professionText,
          professionKey,
        }: {
          staffId: number;
          nameRu: string;
          professionText: string;
          professionKey: string;
        }) => ({
          staffId,
          nameRu,
          professionText,
          professionKey,
        }),
      );

      const filmData = {
        description,
        released,
        boxOffice,
        recommendations,
        people,
      };

      return filmData;
    } catch (error) {
      const errorFetch = error as AxiosError;
      return rejectWithValue(errorFetch.message);
    }
  },
);
