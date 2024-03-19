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
import { Locales } from '../../constants/Locales.constants';

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
  );
}
