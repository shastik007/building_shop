// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
 
const Slider =  () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      navigation
      autoplay={{delay:4000, disableOnInteraction: false}}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      slidesPerView={1}
    >
      <SwiperSlide>
          <StyledSlide img="https://cdn.pixabay.com/photo/2019/04/17/08/37/wood-4133620_960_720.jpg">
              <StyledSlideText>
                  Some Text
              </StyledSlideText>
          </StyledSlide>
      </SwiperSlide>
      <SwiperSlide>
          <StyledSlide img="https://cdn.pixabay.com/photo/2014/10/05/08/11/iron-rods-474792_960_720.jpg">
              <StyledSlideText>
                  Some Text
              </StyledSlideText>
          </StyledSlide>
      </SwiperSlide>
      <SwiperSlide>
          <StyledSlide img="https://cdn.pixabay.com/photo/2016/09/22/08/35/steel-construction-1686640_960_720.jpg">
              <StyledSlideText>
                  Some Text
              </StyledSlideText>
          </StyledSlide>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider



const StyledSlide = styled.div`
  background-image: ${({img}) => `url(${img})`};
  background-size: cover;
  background-repeat: no-repeat;
  height: 350px;
  margin-bottom: 30px;
  width: 100%;
`

const StyledSlideText = styled.h1`
  color: white;
`