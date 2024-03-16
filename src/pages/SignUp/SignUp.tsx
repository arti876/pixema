import { useLocation, useNavigate } from 'react-router-dom';
import { RoutePath } from '../../constants/RoutePath.constants';
import FormAuth from '../../components/FormAuth/FormAuth';
import Authorization from '../Authorization/Authorization';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from '../../store/store';
import { addUser } from '../../store/Slice/usersSlice';

export default function SignUp() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const uniqueId = uuidv4();

  function handleRegister(name: string, email: string, password: string) {
    const user = {
      userId: uniqueId,
      name,
      email,
      password,
      filmFavorites: [],
    };
    dispatch(addUser(user));
    navigate(RoutePath.SIGN_IN);
  }

  return (
    <Authorization>
      <FormAuth nameForm='Sign Up' location={location.pathname} handleClick={handleRegister} />
    </Authorization>
  );
}
