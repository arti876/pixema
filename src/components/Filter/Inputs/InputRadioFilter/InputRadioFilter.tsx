import { Control, Controller } from 'react-hook-form';
import style from './InputRadioFilter.module.scss';
import { FilterName } from '../..';
import { IFilmThunkParams } from '../../../../store/Slice/filmsSlice';

interface ControllerTextFieldProps {
  control: Control<IFilmThunkParams>;
  label: string;
  valueOption: string;
}

export default function InputRadioFilter({
  control,
  label,
  valueOption,
}: ControllerTextFieldProps) {
  return (
    <Controller
      control={control}
      name={FilterName.RADIO_RATING_YEAR}
      render={({ field: { onChange, onBlur, value } }) => (
        <label className={`${style.labelBtn} ${value === valueOption && style.inputActive}`}>
          <div className={style.labelBtnText}>{label}</div>
          <input
            type='radio'
            value={valueOption}
            className={style.input}
            onChange={(e) => {
              onChange(e);
            }}
            onBlur={onBlur}
            checked={value === valueOption}
          />
        </label>
      )}
    />
  );
}
