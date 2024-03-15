import { Control, Controller } from 'react-hook-form';
import style from './InputTextFilter.module.scss';
import { FilterName, FilterNameType } from '../../Filter.type.';
import { IFilmThunkParams } from '../../../../store/Slice/filmsSlice';

interface ControllerTextFieldProps {
  control: Control<IFilmThunkParams>;
  name: FilterNameType;
  label?: string;
  type?: string;
  placeholder: string;
}

export default function InputTextFilter({
  control,
  name,
  label = '',
  type = 'text',
  placeholder,
}: ControllerTextFieldProps) {
  const inputValMin =
    type === 'number' && FilterName.YEARS_FROM === name
      ? '1985'
      : type === 'number' && FilterName.RATING_FROM
      ? '0'
      : '';

  const inputValMax =
    type === 'number' && FilterName.YEARS_TO === name
      ? '2024'
      : type === 'number' && FilterName.RATING_TO
      ? '10'
      : '';

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <label className={style.labelContainer}>
          <div className={style.label}>{label}</div>
          <input
            className={style.input}
            type={type}
            onChange={(e) => onChange(e)}
            onBlur={onBlur}
            value={value}
            placeholder={placeholder}
            min={inputValMin}
            max={inputValMax}
          />
        </label>
      )}
    />
  );
}
