import { SvgProps } from '.';

export function SvgFilter({ className = '' }: SvgProps) {
  return (
    <svg className={className} viewBox='0 0 16 14' xmlns='http://www.w3.org/2000/svg'>
      <path
        fill='current'
        d='M0 1C0 0.447715 0.447715 0 1 0H15C15.5523 0 16 0.447715 16 1C16 1.55228 15.5523 2 15 2H1C0.447715 2 0 1.55228 0 1ZM5 7C5 6.44772 5.44772 6 6 6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H6C5.44772 8 5 7.55228 5 7ZM9 13C9 12.4477 9.44771 12 10 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H10C9.44771 14 9 13.5523 9 13Z'
      />
    </svg>
  );
}
