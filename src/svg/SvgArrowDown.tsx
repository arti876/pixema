import { SvgProps } from '.';

export function SvgArrowDown({ className = '' }: SvgProps) {
  return (
    <svg className={className} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <path
        fill='current'
        d='M17.7808 9.37534C18.1258 9.8066 18.0559 10.4359 17.6247 10.7809L12 15.2807L6.37527 10.7809C5.94401 10.4359 5.87408 9.8066 6.21909 9.37534C6.5641 8.94408 7.1934 8.87416 7.62466 9.21917L12 12.7194L16.3753 9.21917C16.8065 8.87416 17.4358 8.94408 17.7808 9.37534Z'
      />
    </svg>
  );
}
