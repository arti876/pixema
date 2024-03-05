import style from './Header.module.scss';
import Search from '../Search/Search';

export default function Header() {
  return (
    <div className={style.wrapper}>
      <Search />
    </div>
  );
}
