import { createAsyncThunk } from '@reduxjs/toolkit';
import { FirebaseError } from 'firebase/app';
import { getAuth, sendEmailVerification, updateEmail } from 'firebase/auth';

interface fetchUpdateEmailParams {
  email: string;
}

export const fetchUpdateEmail = createAsyncThunk(
  'fetchUpdateEmail',
  async ({ email }: fetchUpdateEmailParams, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user !== null) {
        await updateEmail(user, email);
        await sendEmailVerification(user);
      }
    } catch (error) {
      const firebaseError = error as FirebaseError;
      return rejectWithValue(firebaseError.code);
    }
  },
);
