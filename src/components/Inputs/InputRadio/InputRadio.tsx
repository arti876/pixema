import style from './InputRadio.module.scss';

interface InputRadioProps {
  id: string;
  classLabel?: string;
  classInput?: string;
  name: string;
  value: string;
  isChecked: string;
  isDisabled?: boolean;
  children: string | JSX.Element;
  onChange: (value: any) => void;
}

export default function InputRadio({
  id,
  classLabel,
  classInput,
  name,
  value,
  isChecked,
  isDisabled,
  children,
  onChange,
}: InputRadioProps) {
  function handleRadio(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }

  return (
    <div className={style['radio-wrapper']}>
      <label htmlFor={id} className={classLabel || style['radio-label']}>
        {children}
      </label>
      <input
        id={id}
        className={classInput || style['radio-element']}
        type='radio'
        name={name}
        value={value}
        checked={isChecked === value}
        disabled={isDisabled}
        onChange={handleRadio}
      />
    </div>
  );
}

InputRadio.defaultProps = {
  classLabel: null,
  classInput: null,
  isDisabled: null,
};
