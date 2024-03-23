import { createAsyncThunk } from '@reduxjs/toolkit';
import { FirebaseError } from 'firebase/app';
import { getAuth, updatePassword } from 'firebase/auth';

interface fetchUpdatePasswordParams {
  newPassword: string;
}

export const fetchUpdatePassword = createAsyncThunk(
  'fetchUpdatePassword',
  async ({ newPassword }: fetchUpdatePasswordParams, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        await updatePassword(user, newPassword);
      }
    } catch (error) {
      const firebaseError = error as FirebaseError;
      return rejectWithValue(firebaseError.code);
    }
  },
);
