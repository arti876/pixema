import { useMemo } from 'react';
import style from './User.module.scss';
import Icons from '../Icons/Icons';
import { IconId } from '../../Constants/IconId.constants';

interface UserProps {
  firstName: string;
  lastName: string;
}

export default function User({ firstName, lastName }: UserProps) {
  const getInitials = useMemo(() => {
    return (
      firstName.slice(0, 1).toUpperCase() + lastName.slice(0, 1).toUpperCase()
    );
  }, [firstName, lastName]);

  return (
    <div className={style.wrapper}>
      <div className={style.initials}>{getInitials}</div>
      <div className={style.fullname}>{`${firstName} ${lastName}`}</div>
      <button type='button' className={style.buttonIcoArrow}>
        <Icons className={style.icoArrow} id={IconId.ARROW_DOWN} />
      </button>
    </div>
  );
}
