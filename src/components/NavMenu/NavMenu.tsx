import { IconId } from '../..';
import Icons from '../Icons/Icons';
import style from './NavMenu.module.scss';
import { Link } from 'react-router-dom';

export default function NavMenu() {
  return (
    <div className={style.wrapper}>
      <Icons className={style.logo} id={IconId.PIXEMA} />
      <div className={style.navMenu}>
        <Link to='#' className={`${style.link} ${style.active}`}>
          <div className={style.icoContainer}>
            <Icons className={style.home} id={IconId.HOME} />
          </div>
          <div className={style.linkText}>{IconId.HOME}</div>
        </Link>
        <Link to='#' className={style.link}>
          <div className={style.icoContainer}>
            <Icons className={style.trends} id={IconId.TRENDS} />
          </div>
          <div className={style.linkText}>{IconId.TRENDS}</div>
        </Link>
        <Link to='#' className={style.link}>
          <div className={style.icoContainer}>
            <Icons className={style.favorites} id={IconId.FAVORITES} />
          </div>
          <div className={style.linkText}>{IconId.FAVORITES}</div>
        </Link>
        <Link to='#' className={style.link}>
          <div className={style.icoContainer}>
            <Icons className={style.settings} id={IconId.SETTING} />
          </div>
          <div className={style.linkText}>{IconId.SETTING}</div>
        </Link>
      </div>
      <div className={style.rights}>© All Rights Reserved</div>
    </div>
  );
}
