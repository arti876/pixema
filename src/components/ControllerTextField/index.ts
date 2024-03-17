import { InputProps } from '@mui/material';
import { Control } from 'react-hook-form';

type NameType = 'name' | 'email' | 'password' | 'newPassword';

interface IformData {
  name: string;
  email: string;
  password: string;
  newPassword: string;
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

export type { ControllerTextFieldProps, IformData };
