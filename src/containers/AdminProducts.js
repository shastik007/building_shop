import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fake_sub_category } from '../data/fake_sub_category'
import ShoppCard from '../components/UI/Card'
import styled from 'styled-components'
import media from '../utils/helpers/media'
import { useDispatch } from 'react-redux'
import { orderActions } from '../store'
import { useSelector } from 'react-redux'
import { getAllProducts } from '../store/productSlice'
import Button from '../components/UI/Button'
import AddProductModal from '../components/admin/AddProductModal'
import AdminShoppCard from '../components/UI/AdminProducts'



const AdminProducts = () => {
    const {products} = useSelector(store => store.products)
    const dispatch = useDispatch()
    const {id,category} = useParams()
    const [saveProduct,setSaveProduct] = useState(false)
    const currentSubCategory = products.find(cat => cat.id == category)
    const Materials = currentSubCategory?.nextCategory.find(el => el.id == id)
    useEffect(() => {
        dispatch(getAllProducts())
    })

    const toggleSave = () => setSaveProduct(prev => !prev)

    const addMaterial = (material) => {
        dispatch(orderActions.addItem(material))
    }
    const removeMaterial = (material) => {
      dispatch(orderActions.removeItem(material))
    }

  return (
    <>
    <Actions>
        <ButtonWrapper>
            <Button onClick={toggleSave}>
                create new Product
            </Button>
        </ButtonWrapper>
    </Actions>
    <StyledWrapper>{
        Materials?.products?.map((el) => {
            return <AdminShoppCard  material={el}/>
        })
        }
    </StyledWrapper>
    <AddProductModal isOpen={saveProduct} onClose={toggleSave}/>
    </>
  )
}

export default AdminProducts

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

const ButtonWrapper = styled.div`
  width: fit-content;
`


const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
  margin-top: 30px;
`