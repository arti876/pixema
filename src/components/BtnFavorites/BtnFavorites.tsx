import { useState } from 'react';
import { SvgFavorites } from '../../svg/svg';
import style from './BtnFavorites.module.scss';

interface BtnFavoritesProps {
  className: string;
}

export default function BtnFavorites({ className }: BtnFavoritesProps) {
  const [inFavorites, inFavoritesState] = useState<boolean>(false);

  function handleClick() {
    inFavoritesState(!inFavorites);
  }

  return (
    <button type='button' className={className} onClick={handleClick}>
      <SvgFavorites className={`${style.ico} ${inFavorites && style.icoActive}`} />
    </button>
  );
}
