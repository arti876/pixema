import style from './User.module.scss';
import { SvgUser, SvgArrowDown } from '../../svg/svg';

export default function User() {
  const isAuthorized = false;
  const firstName = 'User';
  const lastName = 'Name';

  function getInitials() {
    return firstName.slice(0, 1).toUpperCase() + lastName.slice(0, 1).toUpperCase();
  }

  return (
    <div className={style.wrapper}>
      <div className={style.initials}>{getInitials()}</div>
      <div className={style.fullname}>{`${isAuthorized ? firstName : 'Sign'} ${isAuthorized ? lastName : 'In'}`}</div>
      {isAuthorized && (
        <button type='button' className={style.buttonIcoArrow}>
          <SvgArrowDown className={style.icoArrow} />
        </button>
      )}
      <SvgUser className={style.icoUser} />
    </div>
  );
}
