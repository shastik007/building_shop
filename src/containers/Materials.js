import React from 'react'
import { useParams } from 'react-router-dom'
import { fake_sub_category } from '../data/fake_sub_category'
import ShoppCard from '../components/UI/Card'
import styled from 'styled-components'
import media from '../utils/helpers/media'
import { useDispatch } from 'react-redux'
import { orderActions } from '../store'

const Materials = () => {
    const dispatch = useDispatch()
    const {id,category} = useParams()
    const currentMaterials = fake_sub_category[category].sub.find(material => material.id == id)

    const addMaterial = (material) => {
        dispatch(orderActions.addItem(material))
    }
  return (
    <StyledWrapper>{
        currentMaterials.materials.map((el) => {
            return <ShoppCard material={el} onAddMaterial={addMaterial}/>
        })
        }
    </StyledWrapper>
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