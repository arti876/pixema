import style from './app.module.scss';
import { useAppDispatch, useAppSelector } from './store/store';
import { switchingTheme } from './store/themeSlice';
import { ThemeVariant } from '.';
import { useEffect } from 'react';

export default function App() {
  const { theme } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(switchingTheme(ThemeVariant.LIGHT));
    console.log(ThemeVariant.LIGHT);
  }

  useEffect(() => {
    if (theme === ThemeVariant.DARK) {
      document.body.className = ThemeVariant.DARK;
    } else {
      document.body.className = ThemeVariant.LIGHT;
    }
  }, [theme]);

  return (
    <div className='wrapper text dark'>
      <button type='button' onClick={handleClick} className={style.testStyle}>
        Hello
      </button>
    </div>
  );
}
