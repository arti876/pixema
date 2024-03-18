import style from './Header.module.scss';
import Search from '../Search/Search';
import User from '../User/User';
import Hamburger from '../Hamburger/Hamburger';

export default function Header() {
  return (
    <div className={style.wrapper}>
      <Search />
      <Hamburger />
      <User />
    </div>
  );
}
