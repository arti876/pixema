import { IconId } from '../../Constants/IconId.constants';
import { countMainPage } from '../../store/Slice/filmMainSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import Icons from '../Icons/Icons';
import style from './ShowMore.module.scss';

export default function ShowMore() {
  const dispatch = useAppDispatch();
  const { mainStatus } = useAppSelector((state) => state.filmMain);

  function nextPage() {
    dispatch(countMainPage(1));
  }

  return (
    <button
      type='button'
      className={`${style.wrapper} ${mainStatus === 'loading' && style.active}`}
      onClick={nextPage}
    >
      <div className={style.text}>Show more</div>
      <Icons id={IconId.SPINNER} className={style.loader} />
    </button>
  );
}
