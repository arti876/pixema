import { SvgProps } from '.';

export function SvgMenu({ className = '' }: SvgProps) {
  return (
    <svg className={className} viewBox='0 0 16 14' xmlns='http://www.w3.org/2000/svg'>
      <path
        fill='current'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 1C0 0.447715 0.447715 0 1 0H15C15.5523 0 16 0.447715 16 1C16 1.55228 15.5523 2 15 2H1C0.447715 2 0 1.55228 0 1ZM0 7C0 6.44772 0.447715 6 1 6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H1C0.447715 8 0 7.55228 0 7ZM0 13C0 12.4477 0.447715 12 1 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H1C0.447715 14 0 13.5523 0 13Z'
      />
    </svg>
  );
}
