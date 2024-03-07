import { IconId } from '../../Constants/IconId.constants';
import Icons from '../Icons/Icons';
import style from './Logo.module.scss';

export default function Logo() {
  return <Icons className={style.logo} id={IconId.PIXEMA} />;
}
