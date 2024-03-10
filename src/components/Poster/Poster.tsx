import style from './Poster.module.scss';
import { IPoster, PosterData } from '../../constants/IPoster.constants';
import { RoutePath } from '../../constants/RoutePath.constants';
import { SvgTrends } from '../../svg/svg';
import { useNavigate } from 'react-router-dom';
import { fetchFilmIdThunk } from '../../store/Thunk/fetchFilmIdThunk';
import { useAppDispatch } from '../../store/store';

interface PosterProps {
  poster: IPoster;
  pageName?: string;
}

export default function Poster({ poster = PosterData, pageName = '' }: PosterProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function navigateTo() {
    if (poster.kinopoiskId) {
      navigate(RoutePath.FILM);
      dispatch(fetchFilmIdThunk(poster.kinopoiskId));
    } else if (poster.filmId) {
      navigate(RoutePath.FILM);
      dispatch(fetchFilmIdThunk(poster.filmId));
    }
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
