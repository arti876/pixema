import style from './Logo.module.scss';
import { SvgPixema } from '../../svg/svg';

export default function Logo() {
  return <SvgPixema className={style.logo} />;
}
