// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import ShoppCard from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import {useSelector} from 'react-redux'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {useDispatch} from 'react-redux'
import {orderActions,productActons} from '../../store/index'
const CustomSwiper =  () => {
  const {products} = useSelector(store => store.products)
  const {order} = useSelector(store => store.order)
  const dispatch = useDispatch()
  const addMaterial = (material) => {
    const isFirst = order.find((product) => product.productId == material.productId)
      dispatch(orderActions.addItem(material))
      dispatch(productActons.increment({productId:material.productId,isFirst:!!isFirst}))
  }

  const removeMaterial = (material) => {
    dispatch(orderActions.removeItem(material))
    dispatch(productActons.decrement(material.productId))
  }


  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      breakpoints={{
        // when window width is >= 640px
        640: {
          width: 640,
          slidesPerView: 2,
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
     {
       products[0]?.nextCategory[0]?.products.map((el) => {
        return (
          <SwiperSlide> 
            <ShoppCard onRemoveMaterial={removeMaterial} material={el} onAddMaterial={addMaterial}/>
            </SwiperSlide>
        )
       })
     }
     
         
      
    </Swiper>
  );
};

export default CustomSwiper