import { SvgShare } from '../../svg/svg';
import style from './BtnShare.module.scss';

interface BtnShareProps {
  className: string;
}

export default function BtnShare({ className }: BtnShareProps) {
  function handleClick() {}

  return (
    <button type='button' className={className} onClick={handleClick}>
      <SvgShare className={style.ico} />
    </button>
  );
}
