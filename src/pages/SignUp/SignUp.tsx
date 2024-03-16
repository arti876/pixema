import { useLocation, useNavigate } from 'react-router-dom';
import { RoutePath } from '../../constants/RoutePath.constants';
import FormAuth from '../../components/FormAuth/FormAuth';
import Authorization from '../Authorization/Authorization';

export default function SignUp() {
  const location = useLocation();
  const navigate = useNavigate();

  function handleRegister(email: string, password: string, firstName: string, lastName: string) {
    navigate(RoutePath.SIGN_IN);
  }

  return (
    <Authorization>
      <FormAuth nameForm='Sign Up' location={location.pathname} handleClick={handleRegister} />
    </Authorization>
  );
}
