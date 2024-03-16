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
  currentUser: string;
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
  currentUser: 'u1tds-324lds-ssl342',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    modificationFavorites: (state, action) => {
      state.users = state.users.map((user) => {
        if (user.userId === state.currentUser) {
          let updatedFilmFavorites;
          if (user.filmFavorites.includes(action.payload)) {
            updatedFilmFavorites = user.filmFavorites.filter(
              (favorite) => favorite !== action.payload,
            );
          } else {
            updatedFilmFavorites = [...user.filmFavorites, action.payload];
          }

          return {
            ...user,
            filmFavorites: updatedFilmFavorites,
          };
        }
        return user;
      });
    },
  },
});

export const { modificationFavorites } = usersSlice.actions;

export default usersSlice.reducer;

// addFavorites: (state, action) => {
//   state.users = state.users.map((user) => {
//     if (user.userId === state.currentUser) {
//       return {
//         ...user,
//         filmFavorites: [...user.filmFavorites, action.payload],
//       };
//     }
//     return user;
//   });
// },
