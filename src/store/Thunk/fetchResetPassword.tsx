import { createAsyncThunk } from '@reduxjs/toolkit';
import { FirebaseError } from 'firebase/app';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

interface fetchResetPasswordParams {
  email: string;
}

export const fetchResetPassword = createAsyncThunk(
  'fetchResetPassword',
  async ({ email }: fetchResetPasswordParams, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      sendPasswordResetEmail(auth, email);
    } catch (error) {
      const firebaseError = error as FirebaseError;
      return rejectWithValue(firebaseError.code);
    }
  },
);
