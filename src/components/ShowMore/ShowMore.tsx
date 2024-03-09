import { Locales } from '../../constants/Locales.constants';
import { useAppDispatch } from '../../store/store';
import style from './ShowMore.module.scss';
import { SvgSpinner } from '../../svg/svg';

interface ShowMoreProps {
  status: string | null;
  dispatchFunction: any;
}

export default function ShowMore({ status, dispatchFunction }: ShowMoreProps) {
  const dispatch = useAppDispatch();

  function nextPage() {
    dispatch(dispatchFunction);
  }

  return (
    <button type='button' className={`${style.wrapper} ${status === 'loading' && style.active}`} onClick={nextPage}>
      <div className={style.text}>{Locales.SHOW_MORE}</div>
      <SvgSpinner className={style.loader} />
    </button>
  );
}
