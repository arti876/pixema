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
  function validationCheck(e: { keyCode: number; preventDefault: () => void }) {
    const typeNumber = type === 'number';
    const numbersTopPanel = e.keyCode >= 48 && e.keyCode <= 57;
    const numbersDigitalPanel = e.keyCode >= 96 && e.keyCode <= 105;
    const onlyNumbers = typeNumber && !(numbersTopPanel || numbersDigitalPanel);
    if (onlyNumbers) {
      e.preventDefault();
    }
  }

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
            onKeyDown={validationCheck}
          />
        </label>
      )}
    />
  );
}
