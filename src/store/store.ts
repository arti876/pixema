import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import themeReducer from './Slice/themeSlice';
import filmsReducer from './Slice/filmsSlice';
import filmIdReducer from './Slice/filmPageSlice';
import usersReducer from './Slice/usersSlice';
import { listenerPending } from './listenerMiddleware/listenerPending';
import { listenerRejected } from './listenerMiddleware/listenerRejected';
import { listenerFulfilled } from './listenerMiddleware/listenerFulfilled';

const rootReducer = combineReducers({
  theme: themeReducer,
  films: filmsReducer,
  filmPage: filmIdReducer,
  users: usersReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([listenerPending, listenerRejected, listenerFulfilled]),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.createStore;

export default store;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
