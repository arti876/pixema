import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Poster from '../Poster/Poster';
import './Recommendations.scss';

import { fakeDataTest } from '../../fakeDataTest';
import { Locales } from '../../constants/Locales.constants';

export default function Recommendations() {
  return (
    <>
      <div className='wrapper-swiper'>
        <div className='title-swiper'>{Locales.RECOMMENDADIONS}</div>
        <Swiper
          // loop={true}
          slidesPerView={4}
          spaceBetween={40}
          autoHeight={true}
          navigation={true}
          modules={[Navigation]}
          className='my-swiper'
        >
          {fakeDataTest.map((data, index) => (
            <SwiperSlide key={index}>
              <Poster poster={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
