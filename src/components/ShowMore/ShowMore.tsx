import { Locales } from '../../constants/Locales.constants';
import { useAppDispatch, useAppSelector } from '../../store/store';
import style from './ShowMore.module.scss';
import { SvgSpinner } from '../../svg/svg';
import { addNextPage, updateFilmData } from '../../store/Slice/filmMainSlice';

interface ShowMoreProps {
  status: string | null;
  dispatchFunction: any;
}

export default function ShowMore({ status, dispatchFunction }: ShowMoreProps) {
  const { paramsThunk } = useAppSelector((state) => state.filmMain);
  const dispatch = useAppDispatch();

  function nextPage() {
    dispatch(dispatchFunction);
    // dispatch(addNextPage(paramsThunk));
    // dispatch(updateFilmData());
  }

  return (
    <button
      type='button'
      className={`${style.wrapper} ${status === 'loading' && style.active}`}
      onClick={nextPage}
    >
      <div className={style.text}>{Locales.SHOW_MORE}</div>
      <SvgSpinner className={style.loader} />
    </button>
  );
}
