import { RIGHTS } from '../..';
import style from './RightsReserved.module.scss';

export default function RightsReserved() {
  return <div className={style.rights}>{RIGHTS.RIGHTS_RESERVED}</div>;
}
