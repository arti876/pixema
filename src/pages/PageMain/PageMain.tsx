import { useAppSelector } from '../../store/store';
import { fetchFilmMain } from '../../store/Thunk/fetchFilmMain';
import RenderContentPage from '../../components/RenderContentPage/RenderContentPage';
import { useEffect } from 'react';

export default function PageMain() {
  const { film, status, error, paramsThunk } = useAppSelector((state) => state.filmMain);

  useEffect(() => {
    console.log(film);
  }, [film]);

  return (
    <RenderContentPage
      thunk={fetchFilmMain(paramsThunk)}
      film={film}
      status={status}
      error={error}
    />
  );
}
