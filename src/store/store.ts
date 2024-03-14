import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import themeReducer from './Slice/themeSlice';
import filmReducer from './Slice/filmSlice';
import filmIdReducer from './Slice/filmIdSlice';
import { listenerMiddleware } from './listenerMiddleware';

const rootReducer = combineReducers({
  theme: themeReducer,
  film: filmReducer,
  filmId: filmIdReducer,
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
