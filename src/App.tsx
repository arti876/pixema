import { Routes, Route } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './store/store';
import { RoutePath, ThemeVariant } from '.';
import { useEffect } from 'react';
import AppLayout from './pages/AppLayout/AppLayout';
import PageMain from './pages/PageMain/PageMain';
import { fetchFilmThunk } from './store/Thunk/fetchFilmThunk';

export default function App() {
  const { theme } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilmThunk());
  }, [dispatch]);

  useEffect(() => {
    if (theme === ThemeVariant.DARK) {
      document.body.className = ThemeVariant.DARK;
    } else {
      document.body.className = ThemeVariant.LIGHT;
    }
  }, [theme]);

  return (
    <Routes>
      <Route path={RoutePath.ROOT} element={<AppLayout />}>
        <Route index element={<PageMain />} />
      </Route>
    </Routes>
  );
}
