import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { ControllerTextFieldProps } from '.';

export default function ControllerTextField({
  control,
  name,
  rules,
  label,
  helperText,
  error,
  type = 'text',
  InputProps = {},
}: ControllerTextFieldProps) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextField
          type={type}
          label={label}
          onChange={(e) => onChange(e)}
          onBlur={onBlur}
          value={value}
          helperText={helperText}
          error={error}
          InputProps={InputProps}
        />
      )}
    />
  );
}
