import { Routes, Route } from 'react-router-dom';
import { useAppSelector } from './store/store';
import { RoutePath, ThemeVariant } from '.';
import { useEffect } from 'react';
import AppLayout from './pages/AppLayout';

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
      <Route path={RoutePath.ROOT} element={<AppLayout />}></Route>
    </Routes>
  );
}
