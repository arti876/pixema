import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { NameValidation, emailValidation, passwordValidation } from './validation';
import ControllerTextField from '../ControllerTextField/ControllerTextField';
import { RoutePath } from '../../constants/RoutePath.constants';
import style from './FormAuth.module.scss';
import clsx from 'clsx';
import { IformData } from '../ControllerTextField';

interface FormAuthProps {
  location: string;
  handleClick: (email: string, password: string, name: string) => void;
  nameForm: string;
}

export default function FormAuth({ location, handleClick, nameForm }: FormAuthProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<IformData>({
    mode: 'onBlur',
    defaultValues: { name: '', email: '', password: '' },
  });

  const onSubmit: SubmitHandler<IformData> = ({ name, email, password }) => {
    handleClick(name, email, password);
    reset();
  };

  return (
    <form className={clsx(style.wrapper, 'style-mui')} onSubmit={handleSubmit(onSubmit)}>
      <div className={style.titleForm}>{nameForm}</div>
      {location === RoutePath.SIGN_UP && (
        <ControllerTextField
          control={control}
          name='name'
          rules={NameValidation}
          type='text'
          label='Name'
          helperText={errors?.name?.message}
          error={!!errors?.name}
        />
      )}
      <ControllerTextField
        control={control}
        name='email'
        rules={emailValidation}
        label='Email'
        helperText={errors?.email?.message}
        error={!!errors?.email}
      />
      <div className={style.passwordContainer}>
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
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge='end'
              >
                {showPassword ? (
                  <VisibilityOff sx={{ fontSize: '24px' }} />
                ) : (
                  <Visibility sx={{ fontSize: '24px' }} />
                )}
              </IconButton>
            ),
          }}
        />
      </div>
      <button className={style.bth} type='submit' disabled={!isValid}>
        {location === RoutePath.SIGN_IN ? 'Sign In' : 'Sign Up'}
      </button>
      {location === RoutePath.SIGN_IN ? (
        <div className={style.signContainer}>
          <p>{'Dont have an account?'}</p>
          <Link to={RoutePath.SIGN_UP} className={style.sign}>
            {'Sign Up'}
          </Link>
        </div>
      ) : (
        <div className={style.signContainer}>
          <p>{'Already have an account?'}</p>
          <Link to={RoutePath.SIGN_IN} className={style.sign}>
            {'Sign Ip'}
          </Link>
        </div>
      )}
    </form>
  );
}