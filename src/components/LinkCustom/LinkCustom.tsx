import { Link, useMatch } from 'react-router-dom';
import style from './LinkCustom.module.scss';
import clsx from 'clsx';

interface LinkCustomProps {
  children: JSX.Element;
  to: string;
  className: string;
}

export default function LinkCustom({ children, to, className }: LinkCustomProps) {
  const match = useMatch({
    path: to,
    end: to.length === 1,
  });

  return (
    <Link to={to} className={clsx(className, style.hover, { [style.active]: match })}>
      {children}
    </Link>
  );
}
