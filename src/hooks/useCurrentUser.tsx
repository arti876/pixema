import { useMemo } from 'react';
import { useAppSelector } from '../store/store';

export default function useCurrentUser() {
  const { users, currentUser } = useAppSelector((state) => state.users);
  const user = useMemo(() => {
    if (currentUser) {
      const findCurrentUser = users.find((user) => user.userId === currentUser);
      return findCurrentUser;
    }
  }, [currentUser]);
  return user;
}
