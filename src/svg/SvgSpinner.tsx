import { SvgProps } from '.';

export function SvgSpinner({ className = '' }: SvgProps) {
  return (
    <svg className={className} viewBox='0 0 19 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M6.95334 2C3.77424 3.14066 1.5 6.1842 1.5 9.75958C1.5 14.3106 5.18483 18 9.7303 18V18C13.322 18 16.3764 15.6965 17.5 12.4844'
        stroke='#7B61FF'
        strokeWidth='2.5'
        strokeLinecap='round'
      />
    </svg>
  );
}
