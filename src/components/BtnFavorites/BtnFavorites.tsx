import { useState } from 'react';
import { modificationFavorites } from '../../localStorage/userLocalStorage';
import { SvgFavorites } from '../../svg/svg';
import style from './BtnFavorites.module.scss';
import clsx from 'clsx';

interface BtnFavoritesProps {
  className: string;
  favorite: string | undefined;
  kinopoiskId: number | undefined;
}

export default function BtnFavorites({ className, favorite, kinopoiskId }: BtnFavoritesProps) {
  const [active, setActive] = useState(favorite && true);

  function handleClick() {
    if (kinopoiskId) {
      modificationFavorites(kinopoiskId);
      setActive(!active);
    }
  }

  return (
    <button type='button' className={className} onClick={handleClick}>
      <SvgFavorites className={clsx(style.ico, { [style.icoActive]: active })} />
    </button>
  );
}
