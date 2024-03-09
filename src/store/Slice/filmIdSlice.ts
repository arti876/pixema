import { createSlice } from '@reduxjs/toolkit';
import { IFilm } from '../../constants/IFilm.constants';
import { fetchFilmIdThunk } from '../Thunk/fetchFilmIdThunk';

interface IFilmIdState {
  film: IFilm[];
  status: string | null;
  error: string | null | unknown;
}

const initialState: IFilmIdState = {
  film: [],
  status: null,
  error: null,
};

const filmIdSlice = createSlice({
  name: 'filmId',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFilmIdThunk.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(fetchFilmIdThunk.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.film = state.film.concat(action.payload);
    });
    builder.addCase(fetchFilmIdThunk.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    });
  },
});

// export const { countpage } = filmIdSlice.actions;

export default filmIdSlice.reducer;
