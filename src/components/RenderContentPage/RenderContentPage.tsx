import { useEffect } from 'react';
import PosterList from '../../components/PosterList/PosterList';
import ShowMore from '../../components/ShowMore/ShowMore';
import { useAppDispatch } from '../../store/store';
import style from './RenderContentPage.module.scss';
import { IFilm } from '../../constants/IFilm.constants';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';

interface RenderContentPageProps {
  film: IFilm[];
  page: number;
  status: string | null;
  error: unknown;
  thunk: any;
  dispatchFunction: any;
  pageName: string;
}

export default function RenderContentPage({
  film,
  page,
  status,
  error,
  thunk,
  dispatchFunction,
  pageName,
}: RenderContentPageProps) {
  const dispatch = useAppDispatch();

  const loading = film.length === 0;
  const rejected = status === 'rejected';

  useEffect(() => {
    dispatch(thunk);
  }, [dispatch, page]);

  if (rejected) {
    return <Error errorMessage={error} />;
  } else if (loading) {
    return <Loader loading={loading} />;
  } else {
    return (
      <>
        <div className={style.wrapper}>
          <PosterList posters={film} pageName={pageName} />
        </div>
        <ShowMore status={status} dispatchFunction={dispatchFunction} />
      </>
    );
  }
}
