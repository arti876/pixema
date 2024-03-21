import { Navigate, Outlet } from 'react-router-dom';
import { RoutePath } from '../constants/RoutePath.constants';
import { getUserLocalStorage } from '../localStorage/userLocalStorage';

export default function PrivateRoute() {
  const { userId } = getUserLocalStorage();

  return userId ? <Outlet /> : <Navigate to={RoutePath.SIGN_IN} />;
}
