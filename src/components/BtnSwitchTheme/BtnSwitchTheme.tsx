import { useState } from 'react';
import { switchingTheme } from '../../store/Slice/themeSlice';
import { useAppDispatch } from '../../store/store';
import style from './BtnSwitchTheme.module.scss';
import clsx from 'clsx';

export default function BtnSwitchTheme() {
  const [toggle, setToggle] = useState(true);
  const dispatch = useAppDispatch();

  function handleSwitch() {
    setToggle((on) => !on);
    dispatch(switchingTheme(toggle));
  }

  return (
    <button
      type='button'
      className={clsx(style.input, { [style.active]: toggle })}
      onClick={handleSwitch}
    />
  );
}
