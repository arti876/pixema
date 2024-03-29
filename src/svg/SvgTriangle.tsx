import { SvgProps } from '.';
import { SvgName } from '../constants/SvgName.constants';

export function SvgTriangle({ className = '' }: SvgProps) {
  return (
    <svg
      id={SvgName.TRIANGLE}
      className={className}
      viewBox='0 0 8 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.23496 0.359427C1.66622 0.0144173 2.29552 0.0843386 2.64052 0.515601L7.14028 6.1403L2.64052 11.765C2.29552 12.1963 1.66622 12.2662 1.23496 11.9212C0.803699 11.5762 0.733778 10.9469 1.07879 10.5156L4.57903 6.1403L1.07879 1.76499C0.733778 1.33373 0.803699 0.704436 1.23496 0.359427Z'
        fill='current'
      />
    </svg>
  );
}
