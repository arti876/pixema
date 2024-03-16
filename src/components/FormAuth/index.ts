import { Control } from 'react-hook-form';
import { InputProps } from '@mui/material';

type NameType = 'firstName' | 'lastName' | 'email' | 'password';

interface IStyleMui {
  form: object;
  Visibility: object;
}

interface IformData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface ControllerTextFieldProps {
  control: Control<IformData>;
  name: NameType;
  rules: object;
  label: string;
  helperText: string | undefined;
  error: boolean;
  type?: string;
  InputProps?: InputProps;
}

export type { IStyleMui, IformData, NameType, ControllerTextFieldProps };
