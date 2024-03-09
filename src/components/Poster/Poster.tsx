import style from './Poster.module.scss';
import { IFilm } from '../../constants/IFilm.constants';
import { RoutePath } from '../../constants/RoutePath.constants';
import { SvgTrends } from '../../svg/svg';
import { useNavigate } from 'react-router-dom';

interface PosterProps {
  poster: IFilm;
  pageName: string;
}

export default function Poster({ poster, pageName }: PosterProps) {
  const navigate = useNavigate();

  function navigateTo() {
    // navigate(RoutePath.FILM, { state: { idFilm: poster.kinopoiskId } });
    navigate(RoutePath.FILM);
  }

  return (
    <>
      {!!poster && (
        <div>
          <button type='button' className={style.imgContainer} onClick={navigateTo}>
            {poster.ratingKinopoisk && `/${RoutePath.TRENDS}` === pageName && (
              <div className={style.ratingTrendsContainer}>
                <SvgTrends className={style.trendsIco} />
                <div className={style.ratingTrendsNumber}>{poster.ratingKinopoisk}</div>
              </div>
            )}
            {poster.ratingKinopoisk && !pageName && <div className={style.rating}>{poster.ratingKinopoisk}</div>}
            <img src={poster.posterUrl} alt={poster.nameRu} />
          </button>
          <div className={style.movieTitle}>{poster.nameRu}</div>
          <div className={style.movieGenreContainer}>
            {poster.genres.map(({ genre }, index, arr) => (
              <div className={style.movieGenreContainer} key={index}>
                <div className={style.movieGenre}>{genre}</div>
                {index < arr.length - 1 && <div className={style.separator} />}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
