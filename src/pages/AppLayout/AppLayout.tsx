import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import style from './AppLayout.module.scss';
import SidePanel from '../../components/SidePanel/SidePanel';

function AppLayout() {
  return (
    <div className={`wrapper ${style.container1}`}>
      <SidePanel />
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
