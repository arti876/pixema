import { combineReducers, configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import themeReducer from './Slice/themeSlice';
import filmMainReducer from './Slice/filmMainSlice';
import filmTrendsReducer from './Slice/filmTrendsSlice';
import filmIdReducer from './Slice/filmIdSlice';

const listenerMiddleware = createListenerMiddleware();

const rootReducer = combineReducers({
  theme: themeReducer,
  filmMain: filmMainReducer,
  filmTrends: filmTrendsReducer,
  filmId: filmIdReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([listenerMiddleware.middleware]),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export default store;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
