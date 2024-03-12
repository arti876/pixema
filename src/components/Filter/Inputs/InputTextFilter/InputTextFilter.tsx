import { Control, Controller } from 'react-hook-form';
import style from './InputTextFilter.module.scss';
import { FilterNameType, IFilter } from '../../Filter.type.';

interface ControllerTextFieldProps {
  control: Control<IFilter>;
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
          />
        </label>
      )}
    />
  );
}
