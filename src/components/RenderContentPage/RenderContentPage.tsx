import { useEffect } from 'react';
import PosterList from '../../components/PosterList/PosterList';
import ShowMore from '../../components/ShowMore/ShowMore';
import { useAppDispatch, useAppSelector } from '../../store/store';
import style from './RenderContentPage.module.scss';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import { useLocation } from 'react-router-dom';
import NotFound from '../../pages/NotFound/NotFound';
import { IPoster } from '../Poster/IPoster.type';

interface RenderContentPageProps {
  favorites?: IPoster[];
  thunk?: () => void;
}

export default function RenderContentPage({ thunk, favorites = [] }: RenderContentPageProps) {
  const { films, status, error } = useAppSelector((state) => state.films);
  const dispatch = useAppDispatch();
  const location = useLocation();

  const loading = status === 'loading';
  const rejected = status === 'rejected';

  useEffect(() => {
    if (favorites.length > 0) {
      dispatch(thunk);
    }
  }, []);

  if (rejected) {
    return <Error errorMessage={error} />;
  } else if (loading) {
    return <Loader loading={loading} />;
  } else if (films.length > 0 || favorites.length > 0) {
    const posters = {
      films,
      favorites,
    };
    return (
      <>
        <div className={style.wrapper}>
          <PosterList posters={posters} pageName={location.pathname} />
        </div>
        <ShowMore status={status} />
      </>
    );
  } else {
    return <NotFound />;
  }
}
