import style from './User.module.scss';
import { SvgUser, SvgTriangle } from '../../svg/svg';
import { Locales } from '../../constants/Locales.constants';
import { useState } from 'react';
import { useClickAway } from '@uidotdev/usehooks';
import { SvgName } from '../../constants/SvgName.constants';
import { ButtonName } from '../../constants/ButtonName.constants';

export default function User() {
  const [menuActive, menuActiveState] = useState<boolean>(false);

  const isAuthorized = true;
  const firstName = 'User';
  const lastName = 'Name';

  const refOutside = useClickAway((e) => {
    const event = e.target;
    const refOutsideTrue = menuActive && event?.name !== ButtonName.BTN_ICO_TRIANGLE && event?.id !== SvgName.TRIANGLE;

    if (refOutsideTrue) {
      menuActiveState(false);
    }
  });

  function getInitials() {
    return firstName.slice(0, 1).toUpperCase() + lastName.slice(0, 1).toUpperCase();
  }

  function openMenu() {
    menuActiveState(true);
  }

  function editProfile() {
    menuActiveState(false);
  }

  function logOut() {
    menuActiveState(false);
  }

  if (isAuthorized && firstName) {
    return (
      <div className={style.wrapper}>
        <div className={style.userContainer}>
          <div className={style.initials}>{getInitials()}</div>
          <div className={style.fullname}>{`${firstName} ${lastName}`}</div>
          <button
            name={ButtonName.BTN_ICO_TRIANGLE}
            type='button'
            className={style.buttonIcoTriangle}
            onClick={openMenu}
          >
            <SvgTriangle className={`${style.icoTriangle} ${menuActive && style.icoTriangleActive}`} />
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
