import { Locales } from '../../constants/Locales.constants';
import BtnFavorites from '../BtnFavorites/BtnFavorites';
import BtnShare from '../BtnShare/BtnShare';
import style from './PosterFilmPage.module.scss';

interface PosterFilmPageProps {
  poster: string;
  favorite: string | undefined;
  kinopoiskId: number | undefined;
}

export default function PosterFilmPage({ poster, favorite, kinopoiskId }: PosterFilmPageProps) {
  return (
    <>
      <div className={style.imgContainer}>
        <img src={poster} alt={Locales.POSTER} />
      </div>
      <div className={style.btnContainer}>
        <BtnFavorites
          className={style.btnFavorites}
          favorite={favorite}
          kinopoiskId={kinopoiskId}
        />
        <BtnShare className={style.btnShare} />
      </div>
    </>
  );
}
