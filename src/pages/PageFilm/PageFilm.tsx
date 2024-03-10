import BtnFavorites from '../../components/BtnFavorites/BtnFavorites';
import BtnShare from '../../components/BtnShare/BtnShare';
import style from './PageFilm.module.scss';
import { SvgImdb } from '../../svg/svg';
import Recommendations from '../../components/Recommendations/Recommendations';
import { useAppSelector } from '../../store/store';
import { Locales } from '../../constants/Locales.constants';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';

export default function PageFilm() {
  const {
    film: {
      description: {
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
    status,
    error,
  } = useAppSelector((store) => store.filmId);

  const loading = status === 'loading';
  const rejected = status === 'rejected';

  if (rejected) {
    return <Error errorMessage={error} />;
  } else if (loading) {
    return <Loader loading={loading} />;
  } else {
    return (
      <div className={style.wrapper}>
        <div className={style.containerLeft}>
          <div className={style.imgContainer}>
            <img src={poster} alt={Locales.POSTER} />
          </div>
          <div className={style.btnContainer}>
            <BtnFavorites className={style.btnFavorites} />
            <BtnShare className={style.btnShare} />
          </div>
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
                  .filter(({ professionKey }) => professionKey === 'ACTOR')
                  .map(({ nameRu }, index, arr) => (
                    <span key={index}>
                      {nameRu}
                      {index < arr.length - 1 && <span>, </span>}
                    </span>
                  ))}
              </div>
            </div>
            <div className={style.filmDetailsItem}>
              <div className={style.filmDetailsLeft}>{Locales.DIRECTOR}</div>
              <div className={style.filmDetailsRight}>
                {people
                  .filter(({ professionKey }) => professionKey === 'DIRECTOR')
                  .map(({ nameRu }, index, arr) => (
                    <span key={index}>
                      {nameRu}
                      {index < arr.length - 1 && <span>, </span>}
                    </span>
                  ))}
              </div>
            </div>
            <div className={style.filmDetailsItem}>
              <div className={style.filmDetailsLeft}>{Locales.WRITERS}</div>
              <div className={style.filmDetailsRight}>
                {people
                  .filter(({ professionKey }) => professionKey === 'WRITER')
                  .map(({ nameRu }, index, arr) => (
                    <span key={index}>
                      {nameRu}
                      {index < arr.length - 1 && <span>, </span>}
                    </span>
                  ))}
              </div>
            </div>
          </div>
          <Recommendations recommendations={recommendations} />
        </div>
      </div>
    );
  }
}
