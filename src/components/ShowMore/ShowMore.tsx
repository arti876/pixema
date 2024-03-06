import { IconId } from '../..';
import Icons from '../Icons/Icons';
import style from './ShowMore.module.scss';

export default function ShowMore() {
  return (
    <button className={`${style.wrapper} ${style.active}`}>
      <div className={style.text}>Show more</div>
      <Icons id={IconId.SPINNER} className={style.loader} />
    </button>
  );
}
