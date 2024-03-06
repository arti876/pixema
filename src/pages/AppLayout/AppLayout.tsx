import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import style from './AppLayout.module.scss';
import SidePanel from '../../components/SidePanel/SidePanel';
import { useMemo } from 'react';
import Poster from '../../components/Poster/Poster';

function AppLayout() {
  const PostersData = useMemo(() => {
    const data = {
      rating: 7.6,
      movieTitle: 'Star Wars: The Rise of Skywalker',
      genre: ['Action', 'Fantasy', 'Fantasy'],
    };

    const dataArr = [
      data,
      data,
      data,
      data,
      data,
      data,
      data,
      data,
      data,
      data,
    ];

    return dataArr;
  }, []);

  return (
    <div className={`wrapper ${style.container1}`}>
      <SidePanel />
      <div className={style.container2}>
        <Header />
        <main className={style.container3}>
          {PostersData.map((data) => (
            <Poster posters={data} />
          ))}
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
