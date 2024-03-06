import { createSlice } from '@reduxjs/toolkit';

const data = {
  rating: 7.6,
  movieTitle: 'Star Wars: The Rise of Skywalker',
  genre: ['Action', 'Fantasy', 'Fantasy'],
  image: '/starwars.jpg',
};

const dataArr = [data, data, data, data, data, data, data, data, data, data];

// interface IMovieState {
//   movie: [];
// }

const initialState = {
  movie: dataArr,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    // switchingTheme: (state, action) => {
    // state.movie = action.payload;
    // },
  },
});

// export const { switchingTheme } = movieSlice.actions;

export default movieSlice.reducer;
