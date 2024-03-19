import { SvgProps } from '.';
import { SvgName } from '../constants/SvgName.constants';

export function SvgShare({ className = '' }: SvgProps) {
  return (
    <svg
      id={SvgName.SHARE}
      className={className}
      viewBox='0 0 16 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='3.54545' cy='8.63634' r='2.54545' stroke='white' strokeWidth='2' />
      <circle cx='12.4546' cy='3.54545' r='2.54545' stroke='white' strokeWidth='2' />
      <circle cx='12.4546' cy='13.7273' r='2.54545' stroke='white' strokeWidth='2' />
      <path
        d='M9.99976 13L6.09082 10.5455M6.09082 7.5L9.99976 5'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  );
}
