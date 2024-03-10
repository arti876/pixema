import style from './Poster.module.scss';
import { FilmData, IFilm } from '../../constants/IFilm.constants';
import { RoutePath } from '../../constants/RoutePath.constants';
import { SvgTrends } from '../../svg/svg';
import { useNavigate } from 'react-router-dom';
import { fetchFilmIdThunk } from '../../store/Thunk/fetchFilmIdThunk';
import { useAppDispatch } from '../../store/store';

interface IRecommendations {
  filmId?: number;
  nameRu?: string;
  posterUrl?: string;
}

const RecommendationsData: IRecommendations = {
  filmId: 0,
  nameRu: '',
  posterUrl: '',
};

interface PosterProps {
  poster: IFilm | IRecommendations;
  pageName?: string;
}

export default function Poster({ poster = FilmData || RecommendationsData, pageName = '' }: PosterProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function navigateTo() {
    if (poster.kinopoiskId) {
      navigate(RoutePath.FILM);
      dispatch(fetchFilmIdThunk(poster.kinopoiskId));
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
