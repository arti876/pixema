import { useAppSelector } from '../../store/store';
import { fetchFilmMainThunk } from '../../store/Thunk/fetchFilmMainThunk';
import RenderContentPage from '../../components/RenderContentPage/RenderContentPage';
// import { countMainPage } from '../../store/Slice/filmMainSlice';

export default function PageMain() {
  const { film, status, error, paramsThunk } = useAppSelector((state) => state.filmMain);

  return <RenderContentPage thunk={fetchFilmMainThunk(paramsThunk)} film={film} status={status} error={error} />;
}
