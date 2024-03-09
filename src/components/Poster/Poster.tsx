import style from './Poster.module.scss';
import { IFilm } from '../../constants/IFilm.constants';
import { RoutePath } from '../../constants/RoutePath.constants';
import { SvgTrends } from '../../svg/svg';

interface PosterProps {
  poster: IFilm;
  pageName: string;
}

export default function Poster({ poster, pageName }: PosterProps) {
  return (
    <>
      {!!poster && (
        <div>
          <div className={style.imgContainer}>
            {poster.ratingKinopoisk && `/${RoutePath.TRENDS}` === pageName && (
              <div className={style.ratingTrendsContainer}>
                <SvgTrends className={style.trendsIco} />
                <div className={style.ratingTrendsNumber}>{poster.ratingKinopoisk}</div>
              </div>
            )}
            {poster.ratingKinopoisk && !pageName && <div className={style.rating}>{poster.ratingKinopoisk}</div>}
            <img src={poster.posterUrl} alt={poster.nameRu} />
          </div>
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
