import { useLocation, useNavigate } from 'react-router-dom';
import { RoutePath } from '../../constants/RoutePath.constants';
import FormAuth from '../../components/FormAuth/FormAuth';
import Authorization from '../Authorization/Authorization';
import { useAppDispatch } from '../../store/store';
import { useRef, useState } from 'react';
import ModalAuth from '../../components/ModalAuth/ModalAuth';
import { fetchResetPassword } from '../../store/Thunk/fetchResetPassword';
import style from './ForgotPassword.module.scss';

export default function ForgotPassword() {
  const [open, setOpen] = useState(false);
  const [resetPassOk, setResetPassOk] = useState(false);
  const [email, setEmail] = useState('');
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const textError = useRef({ title: '', description: '' });

  function handleLogin(_: string, email: string) {
    dispatch(fetchResetPassword({ email })).then((value: any) => {
      if (value?.error?.message === 'Rejected') {
        textError.current = {
          title: 'Reset error',
          description: value.payload,
        };
        setOpen(true);
      } else {
        setEmail(email);
        setResetPassOk(true);
      }
    });
  }

  function handleClick() {
    navigate(RoutePath.SIGN_IN);
  }

  if (!resetPassOk) {
    return (
      <>
        <ModalAuth open={open} setOpen={setOpen} text={textError.current} />
        <Authorization>
          <FormAuth
            nameForm={'Reset password'}
            location={location.pathname}
            handleClick={handleLogin}
          />
        </Authorization>
      </>
    );
  } else {
    return (
      <Authorization>
        <div className={style.wrapper}>
          <div className={style.title}>{'Password reset'}</div>
          <div className={style.description}>
            {`You will receive an email "${email}" with a link to reset your password!`}
          </div>
          <button type='button' className={style.bth} onClick={handleClick}>
            {'OK'}
          </button>
        </div>
      </Authorization>
    );
  }
}
