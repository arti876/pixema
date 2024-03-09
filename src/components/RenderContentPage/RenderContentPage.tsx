import { useEffect } from 'react';
import PosterList from '../../components/PosterList/PosterList';
import ShowMore from '../../components/ShowMore/ShowMore';
import { useAppDispatch } from '../../store/store';
import style from './RenderContentPage.module.scss';
import { IFilm } from '../../constants/IFilm.constants';
import { SvgSpinner } from '../../svg/svg';

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

  const loader = film.length === 0;
  const rejected = status === 'rejected';

  useEffect(() => {
    dispatch(thunk);
  }, [dispatch, page]);

  if (rejected) {
    return <div className={style.rejected}>{`Error: ${error}`}</div>;
  } else if (loader) {
    return (
      <div className={style.loaderContainer}>
        <div className={style.loaderText}>Loading...</div>
        <SvgSpinner className={`${style.loaderIco} ${loader && style.active}`} />
      </div>
    );
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
