import { useLocation, useNavigate } from 'react-router-dom';
import { RoutePath } from '../../constants/RoutePath.constants';
import FormAuth from '../../components/FormAuth/FormAuth';
import Authorization from '../Authorization/Authorization';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { useState } from 'react';
import { addCurrentUser } from '../../store/Slice/usersSlice';
import ModalAuth from '../../components/ModalAuth/ModalAuth';
import { Locales } from '../../constants/Locales.constants';

const text = {
  title: 'Login error',
  description: 'This user does not exist or incorrect data has been entered.',
};

export default function SignIn() {
  const [open, setOpen] = useState(false);
  const { users } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  function handleLogin(_: string, email: string, password: string) {
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      dispatch(addCurrentUser(user.userId));
      navigate(RoutePath.ROOT);
    } else {
      setOpen(true);
    }
  }

  return (
    <>
      <ModalAuth open={open} setOpen={setOpen} text={text} />
      <Authorization>
        <FormAuth
          nameForm={Locales.SIGN_IN}
          location={location.pathname}
          handleClick={handleLogin}
        />
      </Authorization>
    </>
  );
}
