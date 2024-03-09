import { SvgProps } from '.';
import { SvgName } from '../constants/SvgName.constants';

export function SvgArrow({ className = '' }: SvgProps) {
  return (
    <svg id={SvgName.ARROW} className={className} viewBox='0 0 19 12' xmlns='http://www.w3.org/2000/svg'>
      <path
        fill='current'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.7929 11.7071C12.1834 12.0976 12.8166 12.0976 13.2071 11.7071L18.2071 6.70711C18.5976 6.31658 18.5976 5.68342 18.2071 5.29289L13.2071 0.292893C12.8166 -0.0976315 12.1834 -0.0976315 11.7929 0.292893C11.4024 0.683417 11.4024 1.31658 11.7929 1.70711L15.0858 5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H15.0858L11.7929 10.2929C11.4024 10.6834 11.4024 11.3166 11.7929 11.7071Z'
      />
    </svg>
  );
}
