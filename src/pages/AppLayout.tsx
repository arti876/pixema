import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
// import Header from '../../components/Header/Header';
// import Footer from '../../components/Footer/Footer';
// import ImageModal from '../../Modals/ImageModal/ImageModal';

function AppLayout() {
  return (
    <div className='wrapper'>
      {/* <ImageModal /> */}
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default AppLayout;
