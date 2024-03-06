import { createSlice } from '@reduxjs/toolkit';
import { IFilm } from '../..';
import { fetchFilmThunk } from '../Thunk/fetchFilmThunk';

// const data = {
//   rating: 7.6,
//   filmTitle: 'Star Wars: The Rise of Skywalker',
//   genre: ['Action', 'Fantasy', 'Fantasy'],
//   image: '/starwars.jpg',
// };

interface IFilmState {
  film: IFilm[];
  status: string | null;
  error: unknown;
}

const initialState: IFilmState = {
  film: [],
  status: null,
  error: null,
};

const filmSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFilmThunk.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(fetchFilmThunk.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.film = action.payload;
    });
    builder.addCase(fetchFilmThunk.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    });
  },
});

// export const { switchingTheme } = filmSlice.actions;

export default filmSlice.reducer;
