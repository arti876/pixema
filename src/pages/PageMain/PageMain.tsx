import { useEffect } from 'react';
import PosterList from '../../components/PosterList/PosterList';
import ShowMore from '../../components/ShowMore/ShowMore';
import { useAppDispatch, useAppSelector } from '../../store/store';
import style from './PageMain.module.scss';
import { fetchFilmThunk } from '../../store/Thunk/fetchFilmThunk';
import Icons from '../../components/Icons/Icons';
import { IconId } from '../..';

export default function PageMain() {
  const { film, mainPage, status, error } = useAppSelector(
    (state) => state.film,
  );
  const { scrollPosition } = useAppSelector((state) => state.scroll);
  const dispatch = useAppDispatch();

  const loader = film.length === 0;
  const resolved = status === 'resolved';
  const rejected = status === 'rejected';

  useEffect(() => {
    dispatch(fetchFilmThunk(mainPage));
  }, [dispatch, mainPage]);

  useEffect(() => {
    console.log(scrollPosition);
    window.scrollTo(0, scrollPosition);
  }, [resolved]);

  if (rejected) {
    return <div className={style.rejected}>{`Error: ${error}`}</div>;
  } else if (loader) {
    return (
      <div className={style.loaderContainer}>
        <div className={style.loaderText}>Loading...</div>
        <Icons
          id={IconId.SPINNER}
          className={`${style.loaderIco} ${loader && style.active}`}
        />
      </div>
    );
  } else {
    return (
      <>
        <div className={style.wrapper}>
          <PosterList posters={film} />
        </div>
        <ShowMore />
      </>
    );
  }
}
