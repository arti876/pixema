import style from './Header.module.scss';
import Search from '../Search/Search';
import User from '../User/User';

export default function Header() {
  return (
    <div className={style.wrapper}>
      <Search />
      <User />
    </div>
  );
}
