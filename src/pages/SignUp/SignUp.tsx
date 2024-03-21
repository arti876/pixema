import { useLocation } from 'react-router-dom';
import FormAuth from '../../components/FormAuth/FormAuth';
import Authorization from '../Authorization/Authorization';
import { useAppDispatch } from '../../store/store';
import ModalAuth from '../../components/ModalAuth/ModalAuth';
import { useRef, useState } from 'react';
import { Locales } from '../../constants/Locales.constants';
import { fetchSignUpUser } from '../../store/Thunk/fetchSignUpUser';

export default function SignUp() {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const location = useLocation();

  const textError = useRef({ title: '', description: '' });

  function handleRegister(name: string, email: string, password: string) {
    dispatch(fetchSignUpUser({ name, email, password })).then((value: any) => {
      if (value?.error?.message === 'Rejected') {
        textError.current = {
          title: 'e-mail error',
          description: value.payload,
        };
        setOpen(true);
      } else {
        textError.current = {
          title: 'e-mail checking',
          description: 'To complete the registration, you need to confirm your email',
        };
        setOpen(true);
      }
    });
  }

  return (
    <>
      <ModalAuth open={open} setOpen={setOpen} text={textError.current} />
      <Authorization>
        <FormAuth
          nameForm={Locales.SIGN_UP}
          location={location.pathname}
          handleClick={handleRegister}
        />
      </Authorization>
    </>
  );
}
