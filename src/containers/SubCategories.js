import React  , {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fake_sub_category } from '../data/fake_sub_category'
import CategoriesCard from '../components/UI/CategoriesCard'
import styled from 'styled-components'
import media from '../utils/helpers/media'
import { useNavigate } from 'react-router-dom'
import Slider from '../components/user/Slider'
import { useSelector , useDispatch } from 'react-redux'
import { getAllProducts } from '../store/productSlice'

const SubCategories = () => {
  const dispatch = useDispatch()
  const {products} = useSelector(store => store.products)
  const {category} = useParams()
  const navigate = useNavigate()
  const currentCategory = products?.find(product => product.id == category)
  const openCategory = (id) => {
      navigate(`${id}`)
  }
  useEffect(() => {
    dispatch(getAllProducts())
},[])
  return (
    <> 
    <Slider/>
      <StyledWrapper>
        {currentCategory?.nextCategory?.map((category) => {
            return (
               <CategoriesCard onOpenCategory={openCategory} category={category.id} img={category.image} title={category.name} />
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