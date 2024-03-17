import { SubmitHandler, useForm } from 'react-hook-form';
import style from './PageSettings.module.scss';
import useCurrentUser from '../../hooks/useCurrentUser';
import { useState } from 'react';
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
import { updateUserEmail, updateUserName, updateUserPassword } from '../../store/Slice/usersSlice';
import { useNavigate } from 'react-router-dom';

export default function PageSettings() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const user = useCurrentUser();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IformData>({
    mode: 'onBlur',
    defaultValues: { name: user?.name, email: user?.email, password: '', newPassword: '' },
  });

  function cancel() {
    reset({ name: user?.name, email: user?.email, password: '', newPassword: '' });
    navigate(-1);
  }

  const onSubmit: SubmitHandler<IformData> = ({ name, email, password, newPassword }) => {
    const checkName = name && name !== user?.name;
    const checkEmail = email && email !== user?.email;
    const checkPassword = password && newPassword && password === user?.password;

    if (checkName) {
      dispatch(updateUserName(name));
      navigate(-1);
    }
    if (checkEmail) {
      dispatch(updateUserEmail(email));
      navigate(-1);
    }
    if (checkPassword) {
      dispatch(updateUserPassword(newPassword));
      reset({ password: '', newPassword: '' });
      navigate(-1);
    }
  };

  return (
    <form className={clsx(style.wrapper, 'style-mui')} onSubmit={handleSubmit(onSubmit)}>
      <div className={style.inputWrapper}>
        <div className={style.inputTitle}>{'Profile'}</div>
        <div className={style.inputContainer}>
          <ControllerTextField
            control={control}
            name='name'
            rules={NameValidSettings}
            label='Name'
            helperText={errors?.name?.message}
            error={!!errors?.name}
          />
          <ControllerTextField
            control={control}
            name='email'
            rules={emailValidSettings}
            label='Email'
            helperText={errors?.email?.message}
            error={!!errors?.email}
          />
        </div>
      </div>
      <div className={style.inputWrapper}>
        <div className={style.inputTitle}>{'Password'}</div>
        <div className={style.inputContainer}>
          <ControllerTextField
            control={control}
            name='password'
            rules={passwordValidSettings}
            type={showPassword ? 'text' : 'password'}
            label='Password'
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
            name='newPassword'
            rules={passwordNewValidSettings}
            type={showNewPassword ? 'text' : 'password'}
            label='Password'
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
        <div className={style.inputTitle}>{'Color mode'}</div>
        <div className={style.inputContainer}>
          <div className={style.themeText}>
            <div>{'Dark'}</div>
            <div>{'Use dark thema'}</div>
          </div>
          <BtnSwitchTheme />
        </div>
      </div>
      <div className={style.btnContainer}>
        <button className={style.bthCancel} type='button' onClick={cancel}>
          {'Cancel'}
        </button>
        <button className={style.bthSave} type='submit'>
          {'Save'}
        </button>
      </div>
    </form>
  );
}
