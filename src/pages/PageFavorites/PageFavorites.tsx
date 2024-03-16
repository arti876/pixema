import RenderContentPage from '../../components/RenderContentPage/RenderContentPage';
import { fetchFilmsFavorites } from '../../store/Thunk/fetchFilmsFavorites';
// import { useAppSelector } from '../../store/store';

export default function PageFavorites() {
  // const { idFilm } = useAppSelector((store) => store.favorites);
  const idFilm = [5047468, 4540126, 4396438, 4489198, 4664634, 5117258, 409424];

  return <RenderContentPage thunk={fetchFilmsFavorites(idFilm)} />;
}
