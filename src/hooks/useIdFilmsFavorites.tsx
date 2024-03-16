import { useMemo } from 'react';
import { useAppSelector } from '../store/store';

export default function useIdFilmsFavorites() {
  const { users, currentUser } = useAppSelector((store) => store.users);
  const idFilmsFavorites = useMemo(() => {
    return users
      .filter(({ userId }) => userId === currentUser)
      .reduce((acc, { filmFavorites }) => acc.concat(filmFavorites), [] as number[]);
  }, [users, currentUser]);

  return idFilmsFavorites;
}
