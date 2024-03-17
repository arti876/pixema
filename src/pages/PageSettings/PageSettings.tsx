import { SubmitHandler, useForm } from 'react-hook-form';
import style from './PageSettings.module.scss';
import useCurrentUser from '../../hooks/useCurrentUser';
import { useState } from 'react';
import ControllerTextField from '../../components/ControllerTextField/ControllerTextField';
import {
  NameValidation,
  emailValidation,
  passwordValidation,
} from '../../components/FormAuth/validation';
import clsx from 'clsx';
import BtnShowPassword from '../../components/BtnShowPassword/BtnShowPassword';
import { IformData } from '../../components/ControllerTextField';
import BtnSwitchTheme from '../../components/BtnSwitchTheme/BtnSwitchTheme';

export default function PageSettings() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const user = useCurrentUser();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<IformData>({
    mode: 'onBlur',
    defaultValues: { name: user?.name, email: user?.email, password: '', newPassword: '' },
  });

  const onSubmit: SubmitHandler<IformData> = ({ name, email, password, newPassword }) => {
    console.log(name, email, password, newPassword);
    reset();
  };

  return (
    <form className={clsx(style.wrapper, 'style-mui')} onSubmit={handleSubmit(onSubmit)}>
      <div className={style.inputWrapper}>
        <div className={style.inputTitle}>{'Profile'}</div>
        <div className={style.inputContainer}>
          <ControllerTextField
            control={control}
            name='name'
            rules={NameValidation}
            label='Name'
            helperText={errors?.name?.message}
            error={!!errors?.name}
          />
          <ControllerTextField
            control={control}
            name='email'
            rules={emailValidation}
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
            rules={passwordValidation}
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
            rules={passwordValidation}
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
        <div className={style.inputTitle}>{'Password'}</div>
        <div className={style.inputContainer}>
          <BtnSwitchTheme />
        </div>
      </div>
      <div className={style.btnContainer}>
        <button className={style.bthCancel} type='button'>
          {'Cancel'}
        </button>
        <button className={style.bthSave} type='submit' disabled={!isValid}>
          {'Save'}
        </button>
      </div>
    </form>
  );
}
