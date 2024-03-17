import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton } from '@mui/material';

interface BtnShowPasswordProps {
  showPassword: boolean;
  setShowPassword: (value: boolean) => void;
}

export default function BtnShowPassword({
  showPassword = false,
  setShowPassword,
}: BtnShowPasswordProps) {
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
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
  );
}
