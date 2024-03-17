import style from './User.module.scss';
import { SvgUser, SvgTriangle } from '../../svg/svg';
import { useState } from 'react';
import { useClickAway } from '@uidotdev/usehooks';
import { SvgName } from '../../constants/SvgName.constants';
import { UserLocales } from './User.constants';
import useGetInitials from '../../hooks/useGetInitials';
import { useAppDispatch } from '../../store/store';
import { clearCurrentUser } from '../../store/Slice/usersSlice';
import clsx from 'clsx';
import useCurrentUser from '../../hooks/useCurrentUser';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../constants/RoutePath.constants';
import { nullTheme } from '../../store/Slice/themeSlice';

export default function User() {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const user = useCurrentUser();
  const navigate = useNavigate();

  const initials = useGetInitials(user?.name);

  const isAuthorized = true;

  const refOutside = useClickAway((e) => {
    const event = e.target as HTMLElement;
    const refOutsideTrue =
      menuActive &&
      event.getAttribute('name') !== UserLocales.BTN_ICO_TRIANGLE &&
      event.getAttribute('id') !== SvgName.TRIANGLE;

    if (refOutsideTrue) {
      setMenuActive(false);
    }
  }) as React.LegacyRef<HTMLDivElement>;

  function openMenu() {
    setMenuActive(true);
  }

  function editProfile() {
    setMenuActive(false);
    navigate(RoutePath.SETTING);
  }

  function logOut() {
    setMenuActive(false);
    dispatch(clearCurrentUser());
    dispatch(nullTheme());
  }

  if (isAuthorized) {
    return (
      <div className={style.wrapper}>
        <div className={style.userContainer}>
          <div className={style.initials}>{initials}</div>
          <div className={style.fullname}>{user?.name}</div>
          <button
            name={UserLocales.BTN_ICO_TRIANGLE}
            type='button'
            className={style.buttonIcoTriangle}
            onClick={openMenu}
          >
            <SvgTriangle
              className={clsx(style.icoTriangle, { [style.icoTriangleActive]: menuActive })}
            />
          </button>
        </div>
        <div ref={refOutside} className={clsx(style.menu, { [style.menuActive]: menuActive })}>
          <button type='button' onClick={editProfile}>
            {UserLocales.EDIT_PROFILE}
          </button>
          <button type='button' onClick={logOut}>
            {UserLocales.LOG_OUT}
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={style.userContainer}>
        <div className={style.initials}>
          <SvgUser className={style.icoUser} />
        </div>
        <div className={style.fullname}>{UserLocales.SIGN_IN}</div>
      </div>
    );
  }
}
