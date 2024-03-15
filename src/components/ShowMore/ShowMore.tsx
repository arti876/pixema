import { Locales } from '../../constants/Locales.constants';
import { useAppDispatch, useAppSelector } from '../../store/store';
import style from './ShowMore.module.scss';
import { SvgSpinner } from '../../svg/svg';
import { fetchNextPageFilms } from '../../store/Thunk/fetchNextPageFilms';
import { useLocation } from 'react-router-dom';

interface ShowMoreProps {
  status: string | null;
}

export default function ShowMore({ status }: ShowMoreProps) {
  const { paramsThunk } = useAppSelector((state) => state.films);
  const dispatch = useAppDispatch();
  const location = useLocation();

  function nextPage() {
    const arg = {
      params: paramsThunk,
      location: location.pathname,
    };
    dispatch(fetchNextPageFilms(arg));
  }

  return (
    <button
      type='button'
      className={`${style.wrapper} ${status === 'showMore' && style.active}`}
      onClick={nextPage}
    >
      <div className={style.text}>{Locales.SHOW_MORE}</div>
      <SvgSpinner className={style.loader} />
    </button>
  );
}
