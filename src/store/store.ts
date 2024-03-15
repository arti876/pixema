import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { listenerMiddleware } from './listenerMiddleware';
import themeReducer from './Slice/themeSlice';
import filmsReducer from './Slice/filmsSlice';
import filmIdReducer from './Slice/filmIdSlice';
import filmFavoritesReducer from './Slice/filmsFavoritesSlice';

const rootReducer = combineReducers({
  theme: themeReducer,
  films: filmsReducer,
  filmId: filmIdReducer,
  favorites: filmFavoritesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(listenerMiddleware),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.createStore;

export default store;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
