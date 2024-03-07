import { IconId } from '../..';
import { countMainPage } from '../../store/Slice/filmSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import Icons from '../Icons/Icons';
import style from './ShowMore.module.scss';
import useScrollPosition from '../../hook/useScrollPosition';
import { scrollPositionSave } from '../../store/Slice/scrollSlice';

export default function ShowMore() {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.film);
  const scrollPosition = useScrollPosition();

  function nextPage() {
    dispatch(countMainPage(1));
    dispatch(scrollPositionSave(scrollPosition));
  }

  return (
    <button
      type='button'
      className={`${style.wrapper} ${status === 'loading' && style.active}`}
      onClick={nextPage}
    >
      <div className={style.text}>Show more</div>
      <Icons id={IconId.SPINNER} className={style.loader} />
    </button>
  );
}
