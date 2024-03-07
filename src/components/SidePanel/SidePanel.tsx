import Logo from '../Logo/Logo';
import NavMenu from '../NavMenu/NavMenu';
import style from './SidePanel.module.scss';

export default function SidePanel() {
  return (
    <div className={style.wrapper}>
      <Logo />
      <NavMenu />
    </div>
  );
}
