import { useEffect } from 'react';
import PosterList from '../../components/PosterList/PosterList';
import ShowMore from '../../components/ShowMore/ShowMore';
import { useAppDispatch } from '../../store/store';
import style from './RenderContentPage.module.scss';
import { IPoster } from '../Poster/IPoster.type';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';

interface RenderContentPageProps {
  film: IPoster[];
  page: number;
  status: string | null;
  error: unknown;
  thunk: () => void;
  pageName: string;
}

export default function RenderContentPage({
  film,
  status,
  error,
  thunk,
  pageName,
}: RenderContentPageProps) {
  const dispatch = useAppDispatch();

  const loading = film.length === 0;
  const rejected = status === 'rejected';

  useEffect(() => {
    dispatch(thunk);
  }, []);

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
        <ShowMore status={status} dispatchFunction={thunk} />
      </>
    );
  }
}
