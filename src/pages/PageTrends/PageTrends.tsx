import { useAppSelector } from '../../store/store';
import RenderContentPage from '../../components/RenderContentPage/RenderContentPage';
import { fetchFilmTrends } from '../../store/Thunk/fetchFilmTrends';
import { useLocation } from 'react-router-dom';

export default function PageTrends() {
  const { film, status, error, paramsThunk } = useAppSelector((state) => state.film);
  const location = useLocation();

  return (
    <RenderContentPage
      thunk={fetchFilmTrends(paramsThunk)}
      film={film}
      status={status}
      error={error}
      pageName={location.pathname}
    />
  );
}
