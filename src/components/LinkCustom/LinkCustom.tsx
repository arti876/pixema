import { Link, useMatch } from 'react-router-dom';
import style from './LinkCustom.module.scss';

interface LinkCustomProps {
  children: JSX.Element;
  to: string;
  className: string;
}

export default function LinkCustom({
  children,
  to,
  className,
}: LinkCustomProps) {
  const match = useMatch({
    path: to,
    end: to.length === 1,
  });

  return (
    <Link to={to} className={`${className} ${match ? style.active : ''}`}>
      {children}
    </Link>
  );
}
