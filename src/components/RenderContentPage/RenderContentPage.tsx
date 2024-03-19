import { useEffect, useMemo } from 'react';
import PosterList from '../../components/PosterList/PosterList';
import ShowMore from '../../components/ShowMore/ShowMore';
import { useAppDispatch, useAppSelector } from '../../store/store';
import style from './RenderContentPage.module.scss';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import { useLocation } from 'react-router-dom';
import NotFound from '../../pages/NotFound/NotFound';
import useIdFilmsFavorites from '../../hooks/useIdFilmsFavorites';
import { CountriesFilm, GenresFilm } from '../Filter';
import { Locales } from '../../constants/Locales.constants';

interface RenderContentPageProps {
  thunk: () => void;
}

export default function RenderContentPage({ thunk }: RenderContentPageProps) {
  const { films, status, error, paramsThunk, filterActive } = useAppSelector(
    (state) => state.films,
  );
  const idFilmsFavorites = useIdFilmsFavorites();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const loading = status === Locales.STATUS_LOADING;
  const rejected = status === Locales.STATUS_REJECTED;

  useEffect(() => {
    dispatch(thunk);
  }, []);

  const filterData = useMemo(() => {
    const updatedParamsThunk = {
      ...paramsThunk,
      countries: paramsThunk.countries
        ? CountriesFilm.find((country) => country.id === parseInt(paramsThunk.countries)).name
        : '',
      genres: paramsThunk.genres
        ? GenresFilm.find((genre) => genre.id === parseInt(paramsThunk.genres)).name
        : '',
    };
    const result = Object.values(updatedParamsThunk).slice(0, 8);
    return result;
  }, [paramsThunk]);

  if (rejected) {
    return <Error errorMessage={error} />;
  } else if (loading) {
    return <Loader loading={loading} />;
  } else if (films.length > 0) {
    return (
      <>
        <div className={style.wrapper}>
          {filterActive && (
            <div className={style.filterItemContainer}>
              {filterData.map((el, index) => {
                if (el) {
                  return (
                    <div key={index} className={style.filterItem}>
                      {el}
                    </div>
                  );
                }
              })}
            </div>
          )}
          <div className={style.posterListContainer}>
            <PosterList
              posters={films}
              filmFavorites={idFilmsFavorites}
              pageName={location.pathname}
            />
          </div>
        </div>
        {films.length >= 20 && <ShowMore status={status} />}
      </>
    );
  } else {
    return <NotFound />;
  }
}
