import React from 'react'
import { useParams } from 'react-router-dom'
import { fake_sub_category } from '../data/fake_sub_category'
import CategoriesCard from '../components/UI/CategoriesCard'
import styled from 'styled-components'
import media from '../utils/helpers/media'
import { useNavigate } from 'react-router-dom'
import Slider from '../components/user/Slider'



const SubCategories = () => {
  const {category} = useParams()
  const navigate = useNavigate()

  const openCategory = (id) => {
      navigate(`${id}`)
  }
  return (
    <> 
    <Slider/>
      <StyledWrapper>
        {fake_sub_category[category].sub.map((category) => {
            return (
               <CategoriesCard onOpenCategory={openCategory} category={category.id} img={category.image} title={category.title} />
            )
        })}
    </StyledWrapper>
    </>
  )
}

export default SubCategories


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