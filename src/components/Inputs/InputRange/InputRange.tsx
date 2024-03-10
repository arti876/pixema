import style from './InputRange.module.scss';

interface InputRangeProps {
  id: string;
  classLabel?: string;
  classInput?: string;
  name?: string;
  min: string;
  max: string;
  value: string;
  step: string;
  children: string | JSX.Element;
  onChange: (value: any) => void;
}

export default function InputRange({
  id,
  classLabel,
  classInput,
  name,
  min,
  max,
  value,
  step,
  children,
  onChange,
}: InputRangeProps) {
  function handleRange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }

  return (
    <div className={style['range-wrapper']}>
      <label htmlFor={id} className={classLabel || style['range-label']}>
        {children}
      </label>
      <input
        className={classInput || style['range-input']}
        type='range'
        id={id}
        name={name}
        min={min}
        max={max}
        value={value}
        step={step}
        onChange={handleRange}
      />
    </div>
  );
}

InputRange.defaultProps = {
  classLabel: null,
  classInput: null,
  name: null,
};
