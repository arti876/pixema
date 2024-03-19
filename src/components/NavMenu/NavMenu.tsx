import { RoutePath } from '../../constants/RoutePath.constants';
import LinkCustom from '../LinkCustom/LinkCustom';
import style from './NavMenu.module.scss';
import { SvgHome, SvgTrends, SvgFavorites, SvgSettings } from '../../svg/svg';
import { SvgName } from '../../constants/SvgName.constants';
import { useAppDispatch } from '../../store/store';
import { clearCurrentUser } from '../../store/Slice/usersSlice';
import { nullTheme } from '../../store/Slice/themeSlice';
import { UserLocales } from '../../constants/User.constants';
import useCurrentUser from '../../hooks/useCurrentUser';

export default function NavMenu() {
  const dispatch = useAppDispatch();
  const user = useCurrentUser();

  function logOut() {
    dispatch(clearCurrentUser());
    dispatch(nullTheme());
  }

  return (
    <>
      <div className={style.wrapper}>
        <LinkCustom to={RoutePath.ROOT} className={style.link}>
          <>
            <div className={style.icoContainer}>
              <SvgHome className={style.home} />
            </div>
            <div className={style.linkText}>{SvgName.HOME}</div>
          </>
        </LinkCustom>
        <LinkCustom to={RoutePath.TRENDS} className={style.link}>
          <>
            <div className={style.icoContainer}>
              <SvgTrends className={style.trends} />
            </div>
            <div className={style.linkText}>{SvgName.TRENDS}</div>
          </>
        </LinkCustom>
        <LinkCustom to={RoutePath.FAVORITES} className={style.link}>
          <>
            <div className={style.icoContainer}>
              <SvgFavorites className={style.favorites} />
            </div>
            <div className={style.linkText}>{SvgName.FAVORITES}</div>
          </>
        </LinkCustom>
        <LinkCustom to={RoutePath.SETTING} className={style.link}>
          <>
            <div className={style.icoContainer}>
              <SvgSettings className={style.settings} />
            </div>
            <div className={style.linkText}>{SvgName.SETTING}</div>
          </>
        </LinkCustom>
        <div className={style.userContainer}>
          <span className={style.separator} />
          <div className={style.nameUser}>{user?.name}</div>
          <button type='button' onClick={logOut} className={style.btnLogOut}>
            {UserLocales.LOG_OUT}
          </button>
        </div>
      </div>
    </>
  );
}
