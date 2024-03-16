import { Control } from 'react-hook-form';
import { InputProps } from '@mui/material';

type NameType = 'name' | 'email' | 'password';

interface IformData {
  name: string;
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

export type { IformData, NameType, ControllerTextFieldProps };
