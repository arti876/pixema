import style from './Header.module.scss';
import Search from '../Search/Search';
import User from '../User/User';
import Hamburger from '../Hamburger/Hamburger';
import Logo from '../Logo/Logo';

export default function Header() {
  return (
    <div className={style.wrapper}>
      <div className={style.logo}>
        <Logo />
      </div>
      <div className={style.search}>
        <Search />
      </div>
      <div className={style.hamburger}>
        <Hamburger />
      </div>
      <div className={style.user}>
        <User />
      </div>
    </div>
  );
}
