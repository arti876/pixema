import { useEffect } from 'react';
import PosterList from '../../components/PosterList/PosterList';
import ShowMore from '../../components/ShowMore/ShowMore';
import { useAppDispatch, useAppSelector } from '../../store/store';
import style from './RenderContentPage.module.scss';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import { useLocation } from 'react-router-dom';
import NotFound from '../../pages/NotFound/NotFound';

interface RenderContentPageProps {
  thunk: () => void;
}

export default function RenderContentPage({ thunk }: RenderContentPageProps) {
  const { films, status, error } = useAppSelector((state) => state.films);
  const dispatch = useAppDispatch();
  const location = useLocation();

  const loading = status === 'loading';
  const rejected = status === 'rejected';

  useEffect(() => {
    dispatch(thunk);
  }, []);

  if (rejected) {
    return <Error errorMessage={error} />;
  } else if (loading) {
    return <Loader loading={loading} />;
  } else if (films.length > 0) {
    return (
      <>
        <div className={style.wrapper}>
          <PosterList posters={films} pageName={location.pathname} />
        </div>
        <ShowMore status={status} />
      </>
    );
  } else {
    return <NotFound />;
  }
}
