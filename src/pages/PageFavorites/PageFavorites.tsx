import RenderContentPage from '../../components/RenderContentPage/RenderContentPage';
import { fetchFilmsFavorites } from '../../store/Thunk/fetchFilmsFavorites';
import { getUserLocalStorage } from '../../localStorage/userLocalStorage';

export default function PageFavorites() {
  const { filmFavorites } = getUserLocalStorage();

  return <RenderContentPage thunk={fetchFilmsFavorites(filmFavorites)} />;
}
