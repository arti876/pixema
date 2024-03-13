import { useAppSelector } from '../../store/store';
import RenderContentPage from '../../components/RenderContentPage/RenderContentPage';
import { countPage } from '../../store/Slice/filmTrendsSlice';
import { fetchFilmTrends } from '../../store/Thunk/fetchFilmTrends';
import { useLocation } from 'react-router-dom';

export default function PageTrends() {
  const { film, page, status, error } = useAppSelector((state) => state.filmTrends);
  const location = useLocation();

  return (
    <RenderContentPage
      thunk={fetchFilmTrends(page)}
      film={film}
      status={status}
      page={page}
      error={error}
      dispatchFunction={countPage(1)}
      pageName={location.pathname}
    />
  );
}
