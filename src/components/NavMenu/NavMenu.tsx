import { IconId } from '../../Constants/IconId.constants';
import { RoutePath } from '../../Constants/RoutePath.constants';
import Icons from '../Icons/Icons';
import LinkCustom from '../LinkCustom/LinkCustom';
import style from './NavMenu.module.scss';

export default function NavMenu() {
  const dataLink = [
    { path: RoutePath.ROOT, icon: IconId.HOME, styles: style.home },
    { path: RoutePath.TRENDS, icon: IconId.TRENDS, styles: style.trends },
    { path: RoutePath.FAVORITES, icon: IconId.FAVORITES, styles: style.favorites },
    { path: RoutePath.SETTING, icon: IconId.SETTING, styles: style.settings },
  ];

  return (
    <div className={style.wrapper}>
      {!!dataLink &&
        dataLink.map(({ path, icon, styles }, index) => (
          <LinkCustom key={index} to={path} className={style.link}>
            <>
              <div className={style.icoContainer}>
                <Icons className={styles} id={icon} />
              </div>
              <div className={style.linkText}>{icon}</div>
            </>
          </LinkCustom>
        ))}
    </div>
  );
}
