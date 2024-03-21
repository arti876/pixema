import { useLocation, useNavigate } from 'react-router-dom';
import { RoutePath } from '../../constants/RoutePath.constants';
import FormAuth from '../../components/FormAuth/FormAuth';
import Authorization from '../Authorization/Authorization';
import { useAppDispatch } from '../../store/store';
import { useRef, useState } from 'react';
import ModalAuth from '../../components/ModalAuth/ModalAuth';
import { Locales } from '../../constants/Locales.constants';
import { fetchSignInUser } from '../../store/Thunk/fetchSignInUser';

export default function SignIn() {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const textError = useRef({ title: '', description: '' });

  function handleLogin(_: string, email: string, password: string) {
    dispatch(fetchSignInUser({ email, password })).then((value: any) => {
      if (value?.error?.message === 'Rejected') {
        textError.current = {
          title: 'authorization error',
          description: value.payload,
        };
        setOpen(true);
      } else if (!value.payload.emailVerified) {
        textError.current = {
          title: 'authorization error',
          description: 'Your mail has not been verified',
        };
        setOpen(true);
      } else {
        navigate(RoutePath.ROOT);
      }
    });
  }

  return (
    <>
      <ModalAuth open={open} setOpen={setOpen} text={textError.current} />
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
