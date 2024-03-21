import style from './PageFilm.module.scss';
import { SvgImdb } from '../../svg/svg';
import Recommendations from '../../components/Recommendations/Recommendations';
import { useAppSelector } from '../../store/store';
import { Locales } from '../../constants/Locales.constants';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import { useMemo } from 'react';
import PosterFilmPage from '../../components/PosterFilmPage/PosterFilmPage';
import { getUserLocalStorage } from '../../localStorage/userLocalStorage';

export default function PageFilm() {
  const { status, error } = useAppSelector((store) => store.films);

  const {
    film: {
      description: {
        kinopoiskId,
        poster,
        genres,
        nameRu: filmTitle,
        ratingKinopoisk,
        ratingImdb,
        filmLength,
        description,
        year,
        countries,
      },
      released: { date: released, production },
      boxOffice,
      people,
      recommendations,
    },
  } = useAppSelector((store) => store.filmPage);

  const { filmFavorites } = getUserLocalStorage();

  const loading = status === Locales.STATUS_LOADING;
  const rejected = status === Locales.STATUS_REJECTED;

  const favorite = useMemo(() => {
    if (kinopoiskId && filmFavorites) {
      return filmFavorites.filter((id: number) => id === kinopoiskId).join('');
    }
  }, [kinopoiskId, filmFavorites]);

  if (rejected) {
    return <Error errorMessage={error} />;
  } else if (loading) {
    return <Loader loading={loading} />;
  } else {
    return (
      <div className={style.wrapper}>
        <div className={style.posterFuulSize}>
          <PosterFilmPage poster={poster} favorite={favorite} kinopoiskId={kinopoiskId} />
        </div>
        <div className={style.containerRight}>
          <div className={style.filmGenreContainer}>
            {genres.map((genre, index, arr) => (
              <div className={style.filmGenreContainer} key={index}>
                <div className={style.filmGenre}>{genre}</div>
                {index < arr.length - 1 && <div className={style.separator} />}
              </div>
            ))}
          </div>
          <div className={style.filmTitle}>{filmTitle}</div>
          <div className={style.containerRating}>
            {!!ratingKinopoisk && <div className={style.ratingKinopoisk}>{ratingKinopoisk}</div>}
            {!!ratingImdb && (
              <div className={style.ratingImdb}>
                <SvgImdb className={style.icoImdb} />
                {ratingImdb}
              </div>
            )}
            <div className={style.movieLength}>{`${filmLength} min`}</div>
          </div>
          <div className={style.posterTablet}>
            <PosterFilmPage poster={poster} favorite={favorite} kinopoiskId={kinopoiskId} />
          </div>
          <div className={style.filmDescription}>{description}</div>
          <div className={style.filmDetails}>
            <div className={style.filmDetailsItem}>
              <div className={style.filmDetailsLeft}>{Locales.YEAR}</div>
              <div className={style.filmDetailsRight}>{year}</div>
            </div>
            <div className={style.filmDetailsItem}>
              <div className={style.filmDetailsLeft}>{Locales.RELEASED}</div>
              <div className={style.filmDetailsRight}>{released}</div>
            </div>
            <div className={style.filmDetailsItem}>
              <div className={style.filmDetailsLeft}>{Locales.BOX_OFFICE}</div>
              <div className={style.filmDetailsRight}>
                {boxOffice.map(({ type, amount, symbol }, index, arr) => (
                  <span key={index}>
                    {`${type} ${symbol}${amount}`}
                    {index < arr.length - 1 && <span>, </span>}
                  </span>
                ))}
              </div>
            </div>
            <div className={style.filmDetailsItem}>
              <div className={style.filmDetailsLeft}>{Locales.CONTRY}</div>
              <div className={style.filmDetailsRight}>
                {countries.map((country, index, arr) => (
                  <span key={index}>
                    {country}
                    {index < arr.length - 1 && <span>, </span>}
                  </span>
                ))}
              </div>
            </div>
            {production.length > 0 && (
              <div className={style.filmDetailsItem}>
                <div className={style.filmDetailsLeft}>{Locales.PRODUCTION}</div>
                <div className={style.filmDetailsRight}>
                  {production.map(({ name }, index, arr) => (
                    <span key={index}>
                      {name}
                      {index < arr.length - 1 && <span>, </span>}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className={style.filmDetailsItem}>
              <div className={style.filmDetailsLeft}>{Locales.ACTORS}</div>
              <div className={style.filmDetailsRight}>
                {people
                  .filter(({ professionKey }) => professionKey === Locales.ACTOR)
                  .map(({ nameRu }, index, arr) => (
                    <span key={index}>
                      {nameRu}
                      {index < arr.length - 1 && <span>, </span>}
                    </span>
                  ))}
              </div>
            </div>
            <div className={style.filmDetailsItem}>
              <div className={style.filmDetailsLeft}>{Locales.DIRECTOR_LOWER}</div>
              <div className={style.filmDetailsRight}>
                {people
                  .filter(({ professionKey }) => professionKey === Locales.DIRECTOR_UPPER)
                  .map(({ nameRu }, index, arr) => (
                    <span key={index}>
                      {nameRu}
                      {index < arr.length - 1 && <span>, </span>}
                    </span>
                  ))}
              </div>
            </div>
            <div className={style.filmDetailsItem}>
              <div className={style.filmDetailsLeft}>{Locales.WRITERS_LOWER}</div>
              <div className={style.filmDetailsRight}>
                {people
                  .filter(({ professionKey }) => professionKey === Locales.WRITERS_UPPER)
                  .map(({ nameRu }, index, arr) => (
                    <span key={index}>
                      {nameRu}
                      {index < arr.length - 1 && <span>, </span>}
                    </span>
                  ))}
              </div>
            </div>
          </div>
          <div>
            <Recommendations recommendations={recommendations} />
          </div>
        </div>
      </div>
    );
  }
}
