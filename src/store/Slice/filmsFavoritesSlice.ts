import { createSlice } from '@reduxjs/toolkit';
import { IPoster } from '../../components/Poster/IPoster.type';

interface IFilmFavoritesState {
  favorites: IPoster[];
}

const initialState: IFilmFavoritesState = {
  favorites: [],
};

const filmsFavoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      state.favorites = state.favorites.concat(action.payload);
    },
    unFavorite: (state, action) => {
      state.favorites = state.favorites.filter((favorite) => favorite !== action.payload);
    },
  },
});

export const { addFavorites, unFavorite } = filmsFavoritesSlice.actions;

export default filmsFavoritesSlice.reducer;
