import style from './PageTrends.module.scss';
import { useAppSelector } from '../../store/store';
import { fetchFilmTrends } from '../../store/Thunk/fetchFilmTrends';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import PosterList from '../../components/PosterList/PosterList';
import ShowMore from '../../components/ShowMore/ShowMore';
import { useAppDispatch } from '../../store/store';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';

export default function PageTrends() {
  const { film, status, error } = useAppSelector((state) => state.film);
  const dispatch = useAppDispatch();
  const location = useLocation();

  const loading = film.length === 0;
  const rejected = status === 'rejected';

  useEffect(() => {
    dispatch(fetchFilmTrends());
  }, []);

  if (rejected) {
    return <Error errorMessage={error} />;
  } else if (loading) {
    return <Loader loading={loading} />;
  } else {
    return (
      <>
        <div className={style.wrapper}>
          <PosterList posters={film} pageName={location.pathname} />
        </div>
        <ShowMore status={status} />
      </>
    );
  }
}
