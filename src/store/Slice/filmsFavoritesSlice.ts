import { createSlice } from '@reduxjs/toolkit';

interface IFilmFavoritesState {
  idFilm: number[];
}

const initialState: IFilmFavoritesState = {
  idFilm: [],
};

const filmsFavoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    // addFavorites: (state, action) => {
    //   state.favorites = state.favorites.concat(action.payload);
    // },
    // unFavorite: (state, action) => {
    //   state.favorites = state.favorites.filter((favorite) => favorite !== action.payload);
    // },
  },
});

export const {} = filmsFavoritesSlice.actions;

export default filmsFavoritesSlice.reducer;
