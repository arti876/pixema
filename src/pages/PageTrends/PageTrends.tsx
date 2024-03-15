import { fetchTrendsFilms } from '../../store/Thunk/fetchTrendsFilms';
import RenderContentPage from '../../components/RenderContentPage/RenderContentPage';

export default function PageTrends() {
  return <RenderContentPage thunk={fetchTrendsFilms()} />;
}
