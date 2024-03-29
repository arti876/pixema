import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FreeMode, Navigation } from 'swiper/modules';
import Poster from '../Poster/Poster';
import './Recommendations.scss';
import { Locales } from '../../constants/Locales.constants';

interface IRecommendations {
  recommendations: [
    {
      filmId: number;
      nameRu: string;
      posterUrl: string;
    },
  ];
}

export default function Recommendations({ recommendations }: IRecommendations) {
  if (recommendations.length) {
    return (
      <>
        <div className='wrapper-swiper'>
          <div className='title-swiper'>{Locales.RECOMMENDADIONS}</div>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={40}
            navigation={true}
            freeMode={true}
            modules={[FreeMode, Navigation]}
            className='my-swiper'
          >
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
  } else {
    return null;
  }
}
