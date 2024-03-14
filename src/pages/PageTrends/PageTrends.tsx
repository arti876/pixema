import { fetchFilmTrends } from '../../store/Thunk/fetchFilmTrends';
import RenderContentPage from '../../components/RenderContentPage/RenderContentPage';

export default function PageTrends() {
  return <RenderContentPage thunk={fetchFilmTrends()} />;
}
