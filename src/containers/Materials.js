import React , {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fake_sub_category } from '../data/fake_sub_category'
import ShoppCard from '../components/UI/Card'
import styled from 'styled-components'
import media from '../utils/helpers/media'
import { useDispatch } from 'react-redux'
import { orderActions, productActons } from '../store'
import { useSelector } from 'react-redux'
import { getAllProducts } from '../store/productSlice'


const Materials = () => {
    const {products} = useSelector(store => store.products)
    const {order} = useSelector(store => store.order)
    const dispatch = useDispatch()
    const {id,category} = useParams()
    const currentSubCategory = products?.find(cat => cat.id == category)
    const Materials = currentSubCategory?.nextCategory.find(el => el.id == id)

    const addMaterial = (material) => {
      const isFirst = order.find((product) => product.productId == material.productId)
        dispatch(orderActions.addItem(material))
        dispatch(productActons.increment({productId:material.productId,isFirst:!!isFirst}))
    }
    const removeMaterial = (material) => {
      dispatch(orderActions.removeItem(material))
      dispatch(productActons.decrement(material.productId))
    }

    useEffect(() => {
      dispatch(getAllProducts())
  },[])
  return (
    <>
    <StyledWrapper>{
        Materials?.products?.map((el) => {
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