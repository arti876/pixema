import RenderContentPage from '../../components/RenderContentPage/RenderContentPage';
import { fetchFilmsFavorites } from '../../store/Thunk/fetchFilmsFavorites';
// import { useAppSelector } from '../../store/store';

export default function PageFavorites() {
  const { favorites } = useAppSelector((store) => store.favorites);

  return <RenderContentPage thunk={fetchFilmsFavorites()} />;
}
