import { Routes, Route } from 'react-router-dom';
import { useAppSelector } from './store/store';
import { RoutePath } from './constants/RoutePath.constants';
import { ThemeVariant } from './constants/ThemeVariant.constants';
import { useEffect } from 'react';
import AppLayout from './pages/AppLayout/AppLayout';
import PageMain from './pages/PageMain/PageMain';
import PageTrends from './pages/PageTrends/PageTrends';
import PageFilm from './pages/PageFilm/PageFilm';
import NotFound from './pages/NotFound/NotFound';
import PageFavorites from './pages/PageFavorites/PageFavorites';
import SignUp from './pages/SignUp/SignUp';
import Authorization from './pages/Authorization/Authorization';

export default function App() {
  const { theme } = useAppSelector((state) => state.theme);

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
        <Route path={RoutePath.TRENDS} element={<PageTrends />} />
        <Route path={RoutePath.FAVORITES} element={<PageFavorites />} />
        <Route path={RoutePath.SETTING} element={<NotFound />} />
        <Route path={RoutePath.FILM} element={<PageFilm />} />
      </Route>
      <Route path={RoutePath.SIGN_UP} element={<SignUp />} />
      {/* <Route path={RoutePath.SIGN_IN} element={<PageFilm />} /> */}
    </Routes>
  );
}
