import RenderContentPage from '../../components/RenderContentPage/RenderContentPage';
import { fetchFilmsFavorites } from '../../store/Thunk/fetchFilmsFavorites';
import useIdFilmsFavorites from '../../hooks/useIdFilmsFavorites';

export default function PageFavorites() {
  const idFilmsFavorites = useIdFilmsFavorites();

  return <RenderContentPage thunk={fetchFilmsFavorites(idFilmsFavorites)} />;
}
