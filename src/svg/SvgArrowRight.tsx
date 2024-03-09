import { SvgProps } from '.';

export function SvgArrowRight({ className = '' }: SvgProps) {
  return (
    <svg className={className} viewBox='0 0 8 13' xmlns='http://www.w3.org/2000/svg'>
      <path
        fill='current'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.23521 0.359427C1.66647 0.0144173 2.29576 0.0843386 2.64077 0.515601L7.14053 6.1403L2.64077 11.765C2.29576 12.1963 1.66647 12.2662 1.23521 11.9212C0.803943 11.5762 0.734022 10.9469 1.07903 10.5156L4.57928 6.1403L1.07903 1.76499C0.734022 1.33373 0.803943 0.704436 1.23521 0.359427Z'
      />
    </svg>
  );
}
