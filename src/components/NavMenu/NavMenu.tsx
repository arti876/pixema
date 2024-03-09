import { RoutePath } from '../../constants/RoutePath.constants';
import LinkCustom from '../LinkCustom/LinkCustom';
import style from './NavMenu.module.scss';
import { SvgHome, SvgTrends, SvgFavorites, SvgSettings } from '../../svg/svg';
import { Locales } from '../../constants/Locales.constants';

export default function NavMenu() {
  return (
    <div className={style.wrapper}>
      <LinkCustom to={RoutePath.ROOT} className={style.link}>
        <>
          <div className={style.icoContainer}>
            <SvgHome className={style.home} />
          </div>
          <div className={style.linkText}>{Locales.HOME}</div>
        </>
      </LinkCustom>
      <LinkCustom to={RoutePath.TRENDS} className={style.link}>
        <>
          <div className={style.icoContainer}>
            <SvgTrends className={style.trends} />
          </div>
          <div className={style.linkText}>{Locales.TRENDS}</div>
        </>
      </LinkCustom>
      <LinkCustom to={RoutePath.FAVORITES} className={style.link}>
        <>
          <div className={style.icoContainer}>
            <SvgFavorites className={style.favorites} />
          </div>
          <div className={style.linkText}>{Locales.FAVORITES}</div>
        </>
      </LinkCustom>
      <LinkCustom to={RoutePath.SETTING} className={style.link}>
        <>
          <div className={style.icoContainer}>
            <SvgSettings className={style.settings} />
          </div>
          <div className={style.linkText}>{Locales.SETTING}</div>
        </>
      </LinkCustom>
    </div>
  );
}
