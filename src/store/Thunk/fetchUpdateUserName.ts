import { createAsyncThunk } from '@reduxjs/toolkit';
import { FirebaseError } from 'firebase/app';
import { User, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';

interface fetchUpdateUserNameParams {
  name: string;
}

export const fetchUpdateUserName = createAsyncThunk(
  'fetchUpdateUserName',
  async ({ name }: fetchUpdateUserNameParams, { rejectWithValue }) => {
    try {
      await updateProfile(auth.currentUser as User, { displayName: name });

      return {
        name: auth.currentUser?.displayName as string,
      };
    } catch (error) {
      const firebaseError = error as FirebaseError;
      return rejectWithValue(firebaseError.code);
    }
  },
);
