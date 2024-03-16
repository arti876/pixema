import style from './User.module.scss';
import { SvgUser, SvgTriangle } from '../../svg/svg';
import { Locales } from '../../constants/Locales.constants';
import { useState } from 'react';
import { useClickAway } from '@uidotdev/usehooks';
import { SvgName } from '../../constants/SvgName.constants';
import { ButtonName } from '../../constants/ButtonName.constants';
import useGetInitials from '../../hooks/useGetInitials';
import { useAppDispatch } from '../../store/store';
import { clearCurrentUser } from '../../store/Slice/usersSlice';

export default function User() {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const userName = 'User name';
  const initials = useGetInitials(userName);

  const isAuthorized = true;

  const refOutside = useClickAway((e) => {
    const event = e.target;
    const refOutsideTrue =
      menuActive && event?.name !== ButtonName.BTN_ICO_TRIANGLE && event?.id !== SvgName.TRIANGLE;

    if (refOutsideTrue) {
      setMenuActive(false);
    }
  });

  function openMenu() {
    setMenuActive(true);
  }

  function editProfile() {
    setMenuActive(false);
  }

  function logOut() {
    setMenuActive(false);
    dispatch(clearCurrentUser());
  }

  if (isAuthorized) {
    return (
      <div className={style.wrapper}>
        <div className={style.userContainer}>
          <div className={style.initials}>{initials}</div>
          <div className={style.fullname}>{userName}</div>
          <button
            name={ButtonName.BTN_ICO_TRIANGLE}
            type='button'
            className={style.buttonIcoTriangle}
            onClick={openMenu}
          >
            <SvgTriangle
              className={`${style.icoTriangle} ${menuActive && style.icoTriangleActive}`}
            />
          </button>
        </div>
        <div ref={refOutside} className={`${style.menu} ${menuActive && style.menuActive}`}>
          <button type='button' onClick={editProfile}>
            {Locales.EDIT_PROFILE}
          </button>
          <button type='button' onClick={logOut}>
            {Locales.LOG_OUT}
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
        <div className={style.fullname}>{Locales.SIGN_IN}</div>
      </div>
    );
  }
}
