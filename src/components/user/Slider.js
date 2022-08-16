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
          <StyledSlide img="https://kartinkin.net/uploads/posts/2022-03/1647402934_44-kartinkin-net-p-stroimateriali-kartinki-48.jpg">
              <StyledSlideText>
                <i>
                Для ремонта волшебство не нужно
                </i>
              </StyledSlideText>
          </StyledSlide>
      </SwiperSlide>
      <SwiperSlide>
          <StyledSlide img="https://kartinkin.net/uploads/posts/2022-03/thumbs/1647402898_4-kartinkin-net-p-stroimateriali-kartinki-5.jpg">
              <StyledSlideText>
                  <i>
                  Выгодные цены на душевные ограждения и поддоны
                  </i>
              </StyledSlideText>
          </StyledSlide>
      </SwiperSlide>
      <SwiperSlide>
          <StyledSlide img="https://celes.club/uploads/posts/2022-05/thumbs/1653085537_1-celes-club-p-stroimateriali-fon-krasivie-1.jpg">
              <StyledSlideText>
                  <i>
                  Все для ремонта
                  </i>
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
  & i{
    display:block;
    text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #ffff 0%,
    orange 29%,
    #ffff 67%,
    #ffff 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
 @keyframes textclip {
  to {
    background-position: 200% center;
  }
}
  }
  text-align: center;
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-self: center;
  padding-top:80px;
`