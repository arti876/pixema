import { createAsyncThunk } from '@reduxjs/toolkit';
import { FirebaseError } from 'firebase/app';
import {
  User,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../../firebase';

interface fetchSignUpUserParams {
  email: string;
  password: string;
  name: string;
}

export const fetchSignUpUser = createAsyncThunk(
  'fetchSignUpUser',
  async ({ email, password, name }: fetchSignUpUserParams, { rejectWithValue }) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser as User, { displayName: name });
      await sendEmailVerification(user);
    } catch (error) {
      const firebaseError = error as FirebaseError;
      return rejectWithValue(firebaseError.code);
    }
  },
);
