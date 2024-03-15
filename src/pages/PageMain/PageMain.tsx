import { fetchFilmsMain } from '../../store/Thunk/fetchFilmsMain';
import RenderContentPage from '../../components/RenderContentPage/RenderContentPage';

export default function PageMain() {
  return <RenderContentPage thunk={fetchFilmsMain()} />;
}
