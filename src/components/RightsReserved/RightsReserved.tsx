import { Locales } from '../../constants/Locales.constants';
import style from './RightsReserved.module.scss';

export default function RightsReserved() {
  return <div className={style.rights}>{Locales.RIGHTS_RESERVED}</div>;
}
