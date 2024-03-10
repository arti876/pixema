import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Poster from '../Poster/Poster';
import './Recommendations.scss';
import { Locales } from '../../constants/Locales.constants';
import { IFilm } from '../../constants/IFilm.constants';

export default function Recommendations({ recommendations }: IFilm) {
  return (
    <>
      <div className='wrapper-swiper'>
        <div className='title-swiper'>{Locales.RECOMMENDADIONS}</div>
        <Swiper slidesPerView={4} spaceBetween={40} navigation={true} modules={[Navigation]} className='my-swiper'>
          {!!recommendations &&
            recommendations.map((data, index) => (
              <SwiperSlide key={index}>
                <Poster poster={data} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
}
