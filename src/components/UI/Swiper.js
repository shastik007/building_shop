// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import ShoppCard from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import {useSelector} from 'react-redux'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
 
const CustomSwiper =  () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      breakpoints={{
        // when window width is >= 640px
        640: {
          width: 640,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 2,
        },
      }}
      navigation
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
          <ShoppCard/>
      </SwiperSlide>
      <SwiperSlide>
          <ShoppCard/>
      </SwiperSlide>
      <SwiperSlide>
          <ShoppCard/>
      </SwiperSlide>
      <SwiperSlide>
          <ShoppCard/>
      </SwiperSlide>
      <SwiperSlide>
          <ShoppCard/>
      </SwiperSlide>
      <SwiperSlide>
          <ShoppCard/>
      </SwiperSlide>
      <SwiperSlide>
          <ShoppCard/>
      </SwiperSlide>
      <SwiperSlide>
          <ShoppCard/>
      </SwiperSlide>
      <SwiperSlide>
          <ShoppCard/>
      </SwiperSlide>
    </Swiper>
  );
};

export default CustomSwiper