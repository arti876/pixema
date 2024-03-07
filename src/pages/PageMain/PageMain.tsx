import { useEffect } from 'react';
import PosterList from '../../components/PosterList/PosterList';
import ShowMore from '../../components/ShowMore/ShowMore';
import { useAppDispatch, useAppSelector } from '../../store/store';
import style from './PageMain.module.scss';
import { fetchFilmMainThunk } from '../../store/Thunk/fetchFilmMainThunk';
import Icons from '../../components/Icons/Icons';
import { IconId } from '../../Constants/IconId.constants';

export default function PageMain() {
  const { mainFilm, mainPage, mainStatus, mainError } = useAppSelector(
    (state) => state.filmMain,
  );
  const dispatch = useAppDispatch();

  const loader = mainFilm.length === 0;
  const rejected = mainStatus === 'rejected';

  useEffect(() => {
    dispatch(fetchFilmMainThunk(mainPage));
  }, [dispatch, mainPage]);

  if (rejected) {
    return <div className={style.rejected}>{`Error: ${mainError}`}</div>;
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
          <PosterList posters={mainFilm} />
        </div>
        <ShowMore />
      </>
    );
  }
}
