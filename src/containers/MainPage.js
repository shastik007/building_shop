import React from 'react'
import styled from 'styled-components'
import CategoriesCard from '../components/UI/CategoriesCard'
import media from '../utils/helpers/media'
import { fake_categories } from '../data/fake_data'


const MainPage = () => {
  return (
    <StyledWrapper>
        {fake_categories.map((categor) => {
          return <CategoriesCard title={categor.title} description={categor.description} img={categor.image}/>
        })}
    </StyledWrapper>
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