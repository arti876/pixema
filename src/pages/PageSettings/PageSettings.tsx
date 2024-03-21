import { SubmitHandler, useForm } from 'react-hook-form';
import style from './PageSettings.module.scss';
import { useRef, useState } from 'react';
import ControllerTextField from '../../components/ControllerTextField/ControllerTextField';
import clsx from 'clsx';
import BtnShowPassword from '../../components/BtnShowPassword/BtnShowPassword';
import { IformData } from '../../components/ControllerTextField';
import BtnSwitchTheme from '../../components/BtnSwitchTheme/BtnSwitchTheme';
import {
  NameValidSettings,
  emailValidSettings,
  passwordNewValidSettings,
  passwordValidSettings,
} from './validSettings';
import { useAppDispatch } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import { Locales } from '../../constants/Locales.constants';
import { getUserLocalStorage, updateUserData } from '../../localStorage/userLocalStorage';
import ModalAuth from '../../components/ModalAuth/ModalAuth';
import { fetchUpdatePassword } from '../../store/Thunk/fetchUpdatePassword';
import { fetchUpdateUserName } from '../../store/Thunk/fetchUpdateUserName';
import { fetchUpdateEmail } from '../../store/Thunk/fetchUpdateEmail';
import { RoutePath } from '../../constants/RoutePath.constants';

export default function PageSettings() {
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = getUserLocalStorage();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IformData>({
    mode: 'onBlur',
    defaultValues: { name: user?.name, email: user?.email, password: '', newPassword: '' },
  });

  const textError = useRef({ title: '', description: '' });

  function cancel() {
    reset({ name: user?.name, email: user?.email, password: '', newPassword: '' });
    navigate(-1);
  }

  const onSubmit: SubmitHandler<IformData> = ({ name, email, password, newPassword }) => {
    const checkName = name && name !== user?.name;
    const checkEmail = email && email !== user?.email;
    const checkPassword = password && newPassword && password === user?.password;

    if (checkName) {
      dispatch(fetchUpdateUserName({ name })).then((value: any) => {
        if (value?.error?.message === 'Rejected') {
          textError.current = {
            title: 'Name error',
            description: value.payload,
          };
          setOpen(true);
        } else {
          updateUserData('name', name);
          navigate(-1);
        }
      });
    }
    if (checkEmail) {
      dispatch(fetchUpdateEmail({ email })).then((value: any) => {
        if (value?.error?.message === 'Rejected') {
          textError.current = {
            title: 'Email error',
            description: value.payload,
          };
          setOpen(true);
        } else {
          updateUserData('email', email);
          navigate(RoutePath.SIGN_IN);
          localStorage.removeItem('user');
        }
      });
    }
    if (checkPassword) {
      dispatch(fetchUpdatePassword({ password })).then((value: any) => {
        if (value?.error?.message === 'Rejected') {
          textError.current = {
            title: 'Password error',
            description: value.payload,
          };
          setOpen(true);
        } else {
          updateUserData('password', newPassword);
          reset({ password: '', newPassword: '' });
          navigate(-1);
        }
      });
    } else if (password !== '') {
      textError.current = {
        title: 'Password error',
        description: 'The current password is incorrect or one of the fields is not filled in',
      };
      setOpen(true);
    }
  };

  return (
    <>
      <ModalAuth open={open} setOpen={setOpen} text={textError.current} />
      <form className={clsx(style.wrapper, 'style-mui')} onSubmit={handleSubmit(onSubmit)}>
        <div className={style.inputWrapper}>
          <div className={style.inputTitle}>{Locales.PROFILE}</div>
          <div className={style.inputContainer}>
            <ControllerTextField
              control={control}
              name={Locales.NAME_LOWER}
              rules={NameValidSettings}
              label={Locales.NAME_UPPER}
              helperText={errors?.name?.message}
              error={!!errors?.name}
            />
            <ControllerTextField
              control={control}
              name={Locales.EMAIL_LOWER}
              rules={emailValidSettings}
              label={Locales.EMAIL_UPPER}
              helperText={errors?.email?.message}
              error={!!errors?.email}
            />
          </div>
        </div>
        <div className={style.inputWrapper}>
          <div className={style.inputTitle}>{Locales.PASSWORD_UPPER}</div>
          <div className={style.inputContainer}>
            <ControllerTextField
              control={control}
              name={Locales.PASSWORD_LOWER}
              rules={passwordValidSettings}
              type={showPassword ? Locales.TEXT : Locales.PASSWORD_LOWER}
              label={Locales.PASSWORD_UPPER}
              helperText={errors?.password?.message}
              error={!!errors?.password}
              InputProps={{
                endAdornment: (
                  <BtnShowPassword showPassword={showPassword} setShowPassword={setShowPassword} />
                ),
              }}
            />
            <ControllerTextField
              control={control}
              name={Locales.NEW_PASSWORD}
              rules={passwordNewValidSettings}
              type={showNewPassword ? Locales.TEXT : Locales.PASSWORD_LOWER}
              label={Locales.PASSWORD_UPPER}
              helperText={errors?.password?.message}
              error={!!errors?.password}
              InputProps={{
                endAdornment: (
                  <BtnShowPassword
                    showPassword={showNewPassword}
                    setShowPassword={setShowNewPassword}
                  />
                ),
              }}
            />
          </div>
        </div>
        <div className={style.inputWrapper}>
          <div className={style.inputTitle}>{Locales.COLOR_MODE}</div>
          <div className={clsx(style.inputContainer, style.themeContainer)}>
            <div className={style.themeText}>
              <div>{Locales.DARK}</div>
              <div>{Locales.USE_THEME}</div>
            </div>
            <BtnSwitchTheme />
          </div>
        </div>
        <div className={style.btnContainer}>
          <button className={style.bthCancel} type='button' onClick={cancel}>
            {Locales.CANCEL}
          </button>
          <button className={style.bthSave} type='submit'>
            {Locales.SAVE}
          </button>
        </div>
      </form>
    </>
  );
}
