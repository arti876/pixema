import style from './Poster.module.scss';
import { PosterData, PosterProps } from './IPoster.type';
import { RoutePath } from '../../constants/RoutePath.constants';
import { SvgTrends } from '../../svg/svg';
import { useNavigate } from 'react-router-dom';
import { fetchFilmPage } from '../../store/Thunk/fetchFilmPage';
import { useAppDispatch } from '../../store/store';
import BtnFavorites from '../BtnFavorites/BtnFavorites';
import { useMemo } from 'react';

export default function Poster({ poster = PosterData, pageName = '', filmFavorites }: PosterProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const rating = !!poster && (poster.ratingKinopoisk || poster.ratingImdb);

  const favorites = useMemo(() => {
    if (poster.kinopoiskId && filmFavorites) {
      return filmFavorites.filter((id) => id === poster.kinopoiskId).join('');
    }
  }, [poster.kinopoiskId, filmFavorites]);

  function navigateTo() {
    if (poster.kinopoiskId) {
      navigate(RoutePath.FILM);
      dispatch(fetchFilmPage(poster.kinopoiskId));
    } else if (poster.filmId) {
      navigate(RoutePath.FILM);
      dispatch(fetchFilmPage(poster.filmId));
    }
  }

  return (
    <>
      {!!poster && (
        <div className={style.posterContainer}>
          <div className={style.imgContainer}>
            {rating && RoutePath.TRENDS === pageName && (
              <div className={style.ratingTrendsContainer}>
                <SvgTrends className={style.trendsIco} />
                <div className={style.ratingTrendsNumber}>{rating}</div>
              </div>
            )}
            {rating && RoutePath.TRENDS !== pageName && (
              <div className={style.rating}>{rating}</div>
            )}
            {favorites && (
              <BtnFavorites
                className={style.btnFavorites}
                favorites={favorites}
                kinopoiskId={poster.kinopoiskId}
              />
            )}
            <img src={poster.posterUrl} alt={poster.nameRu} />
          </div>
          <div className={style.textContainer}>
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
        </div>
      )}
    </>
  );
}
