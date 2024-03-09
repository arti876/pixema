import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import style from './SwiperRecom.module.scss';
import { Pagination } from 'swiper/modules';
import { fakeDataTest } from '../../fakeDataTest';
import Poster from '../Poster/Poster';

interface SwiperRecomPrors {
  content: JSX.Element;
}

export default function SwiperRecom({ content }: SwiperRecomPrors) {
  return (
    <>
      <div style={{ maxWidth: '1184px' }}>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={style.mySwiper}
        >
          {fakeDataTest.map((data, index) => (
            <SwiperSlide>
              <Poster key={index} poster={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
