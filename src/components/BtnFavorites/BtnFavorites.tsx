import { useState } from 'react';
import { SvgFavorites } from '../../svg/svg';
import style from './BtnFavorites.module.scss';

interface BtnFavoritesProps {
  className: string;
  favorites: boolean;
}

export default function BtnFavorites({ className, favorites }: BtnFavoritesProps) {
  // const [inFavorites, setInFavorites] = useState<boolean>(false);

  function handleClick() {
    // setInFavorites(!inFavorites);
  }

  return (
    <button type='button' className={className} onClick={handleClick}>
      <SvgFavorites className={`${style.ico} ${favorites && style.icoActive}`} />
    </button>
  );
}
