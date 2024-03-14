import style from './NotFound.module.scss';
import { SvgFilmNone } from '../../svg/svg';

export default function NotFound() {
  return (
    <div className={style.wrapper}>
      <SvgFilmNone className={style.ico} />
    </div>
  );
}
