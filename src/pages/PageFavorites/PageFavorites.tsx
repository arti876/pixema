import { useMemo } from 'react';
import RenderContentPage from '../../components/RenderContentPage/RenderContentPage';
import { fetchFilmsFavorites } from '../../store/Thunk/fetchFilmsFavorites';
import { useAppSelector } from '../../store/store';

export default function PageFavorites() {
  const { users, currentUser } = useAppSelector((store) => store.users);

  const idFilms = useMemo(() => {
    return users
      .filter(({ userId }) => userId === currentUser.userId)
      .reduce((acc, { filmFavorites }) => acc.concat(filmFavorites), [] as number[]);
  }, [users, currentUser]);

  return <RenderContentPage thunk={fetchFilmsFavorites(idFilms)} />;
}
