import { Navigate, Outlet } from 'react-router-dom';
import { RoutePath } from '../constants/RoutePath.constants';
import { useAppSelector } from '../store/store';

export default function PrivateRoute() {
  const { currentUser } = useAppSelector((state) => state.users);

  return currentUser ? <Outlet /> : <Navigate to={RoutePath.SIGN_IN} />;
}
