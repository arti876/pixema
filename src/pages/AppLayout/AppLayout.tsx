import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import NavMenu from '../../components/NavMenu/NavMenu';
import style from './AppLayout.module.scss';

function AppLayout() {
  return (
    <div className={`wrapper ${style.container1}`}>
      <NavMenu />
      <div className={style.container2}>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
