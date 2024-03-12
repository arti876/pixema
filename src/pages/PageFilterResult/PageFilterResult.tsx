import { useAppSelector } from '../../store/store';
import { fetchFilmMainThunk } from '../../store/Thunk/fetchFilmMainThunk';
import RenderContentPage from '../../components/RenderContentPage/RenderContentPage';
import { countMainPage } from '../../store/Slice/filmMainSlice';

export default function PageFilterResult() {
  const { mainFilm, mainPage, mainStatus, mainError } = useAppSelector((state) => state.filmMain);

  return (
    <RenderContentPage
      thunk={fetchFilmMainThunk(mainPage)}
      film={mainFilm}
      status={mainStatus}
      page={mainPage}
      error={mainError}
      dispatchFunction={countMainPage(1)}
    />
  );
}
