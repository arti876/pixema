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
  reducers: {},
});

// export const {} = usersSlice.actions;

export default usersSlice.reducer;
