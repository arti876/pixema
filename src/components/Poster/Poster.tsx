import style from './Poster.module.scss';
import { PosterData, PosterProps } from './IPoster.type';
import { RoutePath } from '../../constants/RoutePath.constants';
import { SvgTrends } from '../../svg/svg';
import { useNavigate } from 'react-router-dom';
import { fetchFilmId } from '../../store/Thunk/fetchFilmId';
import { useAppDispatch } from '../../store/store';

export default function Poster({ poster = PosterData, pageName = '' }: PosterProps) {
  const rating = !!poster && (poster.ratingKinopoisk || poster.ratingImdb);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function navigateTo() {
    if (poster.kinopoiskId) {
      navigate(RoutePath.FILM);
      dispatch(fetchFilmId(poster.kinopoiskId));
    } else if (poster.filmId) {
      navigate(RoutePath.FILM);
      dispatch(fetchFilmId(poster.filmId));
    }
  }

  return (
    <>
      {!!poster && (
        <div>
          <button type='button' className={style.imgContainer} onClick={navigateTo}>
            {`/${RoutePath.TRENDS}` === pageName && (
              <div className={style.ratingTrendsContainer}>
                <SvgTrends className={style.trendsIco} />
                <div className={style.ratingTrendsNumber}>{rating}</div>
              </div>
            )}
            {rating && !pageName && <div className={style.rating}>{rating}</div>}
            <img src={poster.posterUrl} alt={poster.nameRu} />
          </button>
          <button type='button' className={style.movieTitle} onClick={navigateTo}>
            {poster.nameRu}
          </button>
          <div className={style.movieGenreContainer}>
            {!!poster.genres &&
              poster.genres.map(({ genre }, index, arr) => (
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
