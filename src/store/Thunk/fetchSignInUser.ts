import { createAsyncThunk } from '@reduxjs/toolkit';
import { FirebaseError } from 'firebase/app';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

interface fetchSignInUserParams {
  email: string;
  password: string;
}

export const fetchSignInUser = createAsyncThunk(
  'fetchSignInUser',
  async ({ email, password }: fetchSignInUserParams, { rejectWithValue }) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const userData = {
        userId: user.uid,
        name: user.displayName,
        emailVerified: user.emailVerified,
        email,
        password,
        filmFavorites: [],
      };

      localStorage.setItem('user', JSON.stringify(userData));

      return userData;
    } catch (error) {
      const firebaseError = error as FirebaseError;
      return rejectWithValue(firebaseError.code);
    }
  },
);
