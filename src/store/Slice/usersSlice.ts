import { createSlice } from '@reduxjs/toolkit';

interface IUser {
  userId: string;
  name: string;
  email: string;
  password: string;
  filmFavorites: number[];
}

interface IUsersState {
  users: IUser[];
  currentUser: IUser;
}

const initialState: IUsersState = {
  users: [
    {
      userId: 'u1tds-324lds-ssl342',
      name: '',
      email: '',
      password: '',
      filmFavorites: [5047468, 4540126],
    },
  ],
  currentUser: {
    userId: 'u1tds-324lds-ssl342',
    name: '',
    email: '',
    password: '',
    filmFavorites: [5047468, 4540126],
  },
};

const usersSlice = createSlice({
  name: 'users',
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

export const {} = usersSlice.actions;

export default usersSlice.reducer;
