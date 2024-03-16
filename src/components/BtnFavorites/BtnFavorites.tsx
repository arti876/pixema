import { SvgFavorites } from '../../svg/svg';
import style from './BtnFavorites.module.scss';
import { useAppDispatch } from '../../store/store';
import { modificationFavorites } from '../../store/Slice/usersSlice';

interface BtnFavoritesProps {
  className: string;
  favorites: string | undefined;
  kinopoiskId: number | undefined;
}

export default function BtnFavorites({ className, favorites, kinopoiskId }: BtnFavoritesProps) {
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(modificationFavorites(kinopoiskId));
  }

  return (
    <button type='button' className={className} onClick={handleClick}>
      <SvgFavorites className={`${style.ico} ${favorites && style.icoActive}`} />
    </button>
  );
}
