import RenderContentPage from '../../components/RenderContentPage/RenderContentPage';
import { useAppSelector } from '../../store/store';

export default function PageFavorites() {
  const { favorites } = useAppSelector((store) => store.favorites);

  return <RenderContentPage favorites={favorites} />;
}
