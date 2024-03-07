import { IconId } from '../../Constants/IconId.constants';
import { Locales } from '../../Constants/Locales.constants';
import { useAppDispatch } from '../../store/store';
import Icons from '../Icons/Icons';
import style from './ShowMore.module.scss';

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
    <button
      type='button'
      className={`${style.wrapper} ${status === 'loading' && style.active}`}
      onClick={nextPage}
    >
      <div className={style.text}>{Locales.SHOW_MORE}</div>
      <Icons id={IconId.SPINNER} className={style.loader} />
    </button>
  );
}
