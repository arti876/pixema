import { SvgProps } from '.';
import { SvgName } from '../constants/SvgName.constants';

export function SvgCheck({ className = '' }: SvgProps) {
  return (
    <svg
      id={SvgName.CHECK}
      className={className}
      fill='none'
      viewBox='0 0 13 10'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1 5L4.5 8.5L12 1'
        stroke='current'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
