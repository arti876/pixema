import style from './Authorization.module.scss';
import Logo from '../../components/Logo/Logo';
import RightsReserved from '../../components/RightsReserved/RightsReserved';

interface AuthorizationProps {
  children: JSX.Element;
}

export default function Authorization({ children }: AuthorizationProps) {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <Logo />
      </div>
      <div>{children}</div>
      <div className={style.foooter}>
        <RightsReserved />
      </div>
    </div>
  );
}
