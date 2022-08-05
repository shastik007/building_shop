import React from 'react'
import styled from 'styled-components'
import CategoriesCard from '../components/UI/CategoriesCard'
import media from '../utils/helpers/media'
import { fake_categories } from '../data/fake_data'
import { useNavigate } from 'react-router-dom'
import CustomSwiper from '../components/UI/Swiper'

const MainPage = () => {
  const navigate = useNavigate()
  const openCategory = (categoryId) => {
      navigate(`${categoryId}`)
  }
  return (
   <StyledMain>
     <h1>Категории</h1>
      <StyledWrapper>
        {fake_categories.map((categor) => {
          return <CategoriesCard id={categor.id} onOpenCategory={openCategory} title={categor.title} description={categor.description} img={categor.image}/>
        })}
    </StyledWrapper>
    <h1>Актуальные материалы для вашего дома</h1>
    <CustomSwiper/>
   </StyledMain>
  )
}

export default MainPage


const StyledWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  margin-bottom: 80px;
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
      grid-template-columns: 1fr 1fr 1fr;
    `
  }
`

const StyledMain = styled.div`
 text-align: center;
  ${
    media.mobile`
     margin: 0 auto;
     text-align:center;
    `
  }
`