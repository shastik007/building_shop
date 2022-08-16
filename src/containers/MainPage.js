import React , {useEffect} from 'react'
import styled from 'styled-components'
import CategoriesCard from '../components/UI/CategoriesCard'
import media from '../utils/helpers/media'
import { fake_categories } from '../data/fake_data'
import { useNavigate } from 'react-router-dom'
import CustomSwiper from '../components/UI/Swiper'
import MainHeader from './MainHeader'
import { useDispatch } from 'react-redux'
import { getAllProducts } from '../store/productSlice'
import { useSelector } from 'react-redux'




const MainPage = () => {
  const {products} = useSelector(store => store.products)
  const {role} = useSelector(store => store.auth)
  console.log(products);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const openCategory = (categoryId) => {
      navigate(`${categoryId}`)
  }
  useEffect(() => {
    dispatch(getAllProducts())
  },[])

  useEffect(() => {
    if(role === '[ROLE_ADMIN]'){
      console.log('navigate');
       navigate('admin')
    }
  },[role])
  
  return (
   <StyledMain>
     <MainHeader/>
     <h1>Категории</h1>
      <StyledWrapper>
        {products.map((categor) => {
          return <CategoriesCard category={categor?.id} id={categor?.id} onOpenCategory={openCategory} title={categor?.nameCategory} description={categor?.description} img={categor?.image}/>
        })}
    </StyledWrapper>
    <h1>Актуальные материалы для вашего дома</h1>
    <StyledSwiperWrapper>
       <CustomSwiper/>
    </StyledSwiperWrapper>
   </StyledMain>
  )
}

export default MainPage


const StyledWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 30px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  margin-bottom: 80px;
  background-color: #C4C4C4;
  
  ${
    media.mobile`
     display: flex;
     flex-direction:column;
     justify-content:center;
     align-items:center;
    `
  }
  ${
    media.tablet`
      grid-template-columns: 1fr 1fr;
    `
  }
`

const StyledMain = styled.div`
 text-align: center;
 padding-bottom: 130px;
  ${
    media.mobile`
     margin: 0 auto;
     text-align:center;
    `
  }
`

const StyledSwiperWrapper = styled.div`
  padding: 20px;
  background-color: #C4C4C4;
`