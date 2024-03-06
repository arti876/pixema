import style from './Header.module.scss';
import Search from '../Search/Search';
import User from '../User/User';
import Logo from '../Logo/Logo';

export default function Header() {
  return (
    <div className={style.wrapper}>
      <Search />
      <User firstName='Tom' lastName='Shepard' />
    </div>
  );
}
