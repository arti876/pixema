import { switchingTheme } from '../../store/Slice/themeSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import style from './BtnSwitchTheme.module.scss';
import clsx from 'clsx';

export default function BtnSwitchTheme() {
  const { toggle } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  function handleSwitch() {
    dispatch(switchingTheme());
  }

  return (
    <button
      type='button'
      className={clsx(style.input, { [style.active]: toggle })}
      onClick={handleSwitch}
    />
  );
}
