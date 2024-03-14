import { fetchFilmMain } from '../../store/Thunk/fetchFilmMain';
import RenderContentPage from '../../components/RenderContentPage/RenderContentPage';

export default function PageMain() {
  return <RenderContentPage thunk={fetchFilmMain()} />;
}
