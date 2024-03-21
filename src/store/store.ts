import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import themeReducer from './Slice/themeSlice';
import filmsReducer from './Slice/filmsSlice';
import filmIdReducer from './Slice/filmPageSlice';
import usersReducer from './Slice/usersSlice';
import { listenerPendingFilm } from './listenerMiddleware/listenerPendingFilm';
import { listenerRejectedFilm } from './listenerMiddleware/listenerRejectedFilm';
import { listenerFulfilledFilm } from './listenerMiddleware/listenerFulfilledFilm';

const rootReducer = combineReducers({
  theme: themeReducer,
  films: filmsReducer,
  filmPage: filmIdReducer,
  users: usersReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      listenerPendingFilm,
      listenerRejectedFilm,
      listenerFulfilledFilm,
    ]),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.createStore;

export default store;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
