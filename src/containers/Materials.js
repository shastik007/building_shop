import React from 'react'
import { useParams } from 'react-router-dom'
import { fake_sub_category } from '../data/fake_sub_category'
import ShoppCard from '../components/UI/Card'
import styled from 'styled-components'
import media from '../utils/helpers/media'
import { useDispatch } from 'react-redux'
import { orderActions } from '../store'
import { useSelector } from 'react-redux'

const Materials = () => {
    const {products} = useSelector(store => store.products)
    const dispatch = useDispatch()
    const {id,category} = useParams()
    const currentSubCategory = products.find(cat => cat.id == category)
    const Materials = currentSubCategory.nextCategory.find(el => el.id == id)

    const addMaterial = (material) => {
        dispatch(orderActions.addItem(material))
    }
    const removeMaterial = (material) => {
      dispatch(orderActions.removeItem(material))
    }
  return (
    <>
    <StyledWrapper>{
        Materials.products.map((el) => {
            return <ShoppCard onRemoveMaterial={removeMaterial} material={el} onAddMaterial={addMaterial}/>
        })
        }
    </StyledWrapper>
    </>
  )
}

export default Materials

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