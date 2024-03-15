import { Control, Controller } from 'react-hook-form';
import style from './InputSelectFilter.module.scss';
import { FilterNameType, IOptionSelectFilm } from '../../Filter.type.';
import { SvgTriangle } from '../../../../svg/SvgTriangle';
import { IFilmThunkParams } from '../../../../store/Slice/filmsSlice';

interface ControllerTextFieldProps {
  control: Control<IFilmThunkParams>;
  name: FilterNameType;
  label: string;
  placeholder: string;
  optionData: IOptionSelectFilm[];
}

export default function InputSelectFilter({
  control,
  name,
  label,
  placeholder,
  optionData,
}: ControllerTextFieldProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur } }) => (
        <label className={style.labelContainer}>
          <SvgTriangle className={style.ico} />
          <div className={style.labelText}>{label}</div>
          <select
            className={style.selectContainer}
            defaultValue={''}
            onChange={(e) => onChange(e)}
            onBlur={onBlur}
          >
            <option value={''} disabled hidden>
              {placeholder}
            </option>
            {!!optionData &&
              optionData.map(({ id, name }, index) => (
                <option key={index} value={id} className={style.selectOption}>
                  {name}
                </option>
              ))}
          </select>
        </label>
      )}
    />
  );
}
