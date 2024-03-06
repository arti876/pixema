import { IconId, RoutePath } from '../..';
import Icons from '../Icons/Icons';
import LinkCustom from '../LinkCustom/LinkCustom';
import style from './NavMenu.module.scss';

export default function NavMenu() {
  return (
    <div className={style.wrapper}>
      <LinkCustom to={RoutePath.ROOT} className={style.link}>
        <>
          <div className={style.icoContainer}>
            <Icons className={style.home} id={IconId.HOME} />
          </div>
          <div className={style.linkText}>{IconId.HOME}</div>
        </>
      </LinkCustom>
      <LinkCustom to={RoutePath.TRENDS} className={style.link}>
        <>
          <div className={style.icoContainer}>
            <Icons className={style.trends} id={IconId.TRENDS} />
          </div>
          <div className={style.linkText}>{IconId.TRENDS}</div>
        </>
      </LinkCustom>
      <LinkCustom to={RoutePath.FAVORITES} className={style.link}>
        <>
          <div className={style.icoContainer}>
            <Icons className={style.favorites} id={IconId.FAVORITES} />
          </div>
          <div className={style.linkText}>{IconId.FAVORITES}</div>
        </>
      </LinkCustom>
      <LinkCustom to={RoutePath.SETTING} className={style.link}>
        <>
          <div className={style.icoContainer}>
            <Icons className={style.settings} id={IconId.SETTING} />
          </div>
          <div className={style.linkText}>{IconId.SETTING}</div>
        </>
      </LinkCustom>
    </div>
  );
}
