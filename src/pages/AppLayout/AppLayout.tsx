import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import style from './AppLayout.module.scss';
import SidePanel from '../../components/SidePanel/SidePanel';
import RightsReserved from '../../components/RightsReserved/RightsReserved';

function AppLayout() {
  return (
    <div className='wrapper'>
      <div className={style.wrapper}>
        <SidePanel />
        <div className={style.contentContainer}>
          <Header />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
      <div className={style.rightsReserved}>
        <RightsReserved />
      </div>
    </div>
  );
}

export default AppLayout;
