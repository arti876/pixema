import { useEffect } from 'react';
import PosterList from '../../components/PosterList/PosterList';
import ShowMore from '../../components/ShowMore/ShowMore';
import { useAppDispatch, useAppSelector } from '../../store/store';
import style from './PageMain.module.scss';
import { fetchFilmThunk } from '../../store/Thunk/fetchFilmThunk';
import Icons from '../../components/Icons/Icons';
import { IconId } from '../..';

export default function PageMain() {
  const { film, mainPage, status } = useAppSelector((state) => state.film);
  const dispatch = useAppDispatch();

  const loader = status === 'loading';
  const resolved = status === 'resolved';
  const rejected = status === 'resrejectedolved' || film.length === 0;

  useEffect(() => {
    dispatch(fetchFilmThunk(mainPage));
  }, [dispatch, mainPage]);

  return (
    <>
      {loader && (
        <div className={style.loaderContainer}>
          <div className={style.loaderText}>Loading...</div>
          <Icons
            id={IconId.SPINNER}
            className={`${style.loaderIco} ${loader && style.active}`}
          />
        </div>
      )}
      {resolved && (
        <>
          <div className={style.wrapper}>
            <PosterList posters={film} />
          </div>
          <ShowMore />
        </>
      )}
      {rejected && (
        <div className={style.rejected}>
          <Icons id={IconId.FILM_NONE} />
        </div>
      )}
    </>
  );
}
