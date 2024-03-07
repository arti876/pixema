import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import style from './AppLayout.module.scss';
import SidePanel from '../../components/SidePanel/SidePanel';
import RightsReserved from '../../components/RightsReserved/RightsReserved';

function AppLayout() {
  return (
    <div className='wrapper'>
      <div className={style.container}>
        <SidePanel />
        <div className={style.mainContent}>
          <Header />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
      <RightsReserved />
    </div>
  );
}

export default AppLayout;
