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
      userId: '',
      name: '',
      email: '',
      password: '',
      filmFavorites: [],
    },
  ],
  currentUser: '',
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
    addUser: (state, action) => {
      state.users = state.users.concat(action.payload);
    },
    addCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    clearCurrentUser: (state) => {
      state.currentUser = '';
    },
    updateUserName: (state, action) => {
      state.users = state.users.map((user) => {
        if (user.userId === state.currentUser) {
          return {
            ...user,
            name: action.payload,
          };
        }
        return user;
      });
    },
    updateUserEmail: (state, action) => {
      state.users = state.users.map((user) => {
        if (user.userId === state.currentUser) {
          return {
            ...user,
            email: action.payload,
          };
        }
        return user;
      });
    },
    updateUserPassword: (state, action) => {
      state.users = state.users.map((user) => {
        if (user.userId === state.currentUser) {
          return {
            ...user,
            password: action.payload,
          };
        }
        return user;
      });
    },
  },
});

export const {
  modificationFavorites,
  addUser,
  addCurrentUser,
  clearCurrentUser,
  updateUserName,
  updateUserEmail,
  updateUserPassword,
} = usersSlice.actions;

export default usersSlice.reducer;
