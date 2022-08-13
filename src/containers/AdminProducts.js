import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fake_sub_category } from '../data/fake_sub_category'
import ShoppCard from '../components/UI/Card'
import styled from 'styled-components'
import media from '../utils/helpers/media'
import { useDispatch } from 'react-redux'
import { orderActions } from '../store'
import { useSelector } from 'react-redux'
import { deleteProduct, getAllProducts } from '../store/productSlice'
import Button from '../components/UI/Button'
import AddProductModal from '../components/admin/AddProductModal'
import AdminShoppCard from '../components/UI/AdminProducts'
import { useSearchParams } from 'react-router-dom'
import EditProductModal from '../components/admin/EditProducModal'





const AdminProducts = () => {
    const {products} = useSelector(store => store.products)
    const dispatch = useDispatch()
    const {id,category} = useParams()
    const [,setParams] = useSearchParams()
    const [saveProduct,setSaveProduct] = useState(false)
    const [editProduct,setEditProduct] = useState(false)
    const currentSubCategory = products.find(cat => cat.id == category)
    const Materials = currentSubCategory?.nextCategory.find(el => el.id == id)
    useEffect(() => {
        dispatch(getAllProducts())
    },[])
    const toggleSave = () => setSaveProduct(prev => !prev)
    const toggleEdit = () => setEditProduct(prev => !prev)

    const deleteProductHandler = async (id) => {
        console.log(id);
       await dispatch(deleteProduct(id))
       await dispatch(getAllProducts())
    }
    const openUpdateProductModal = (id) => {
      toggleEdit()
      setParams({productId:id})
    }

  return (
    <div style={{padding:"10px"}}>
    <Actions>
        <ButtonWrapper>
            <Button onClick={toggleSave}>
                create new Product
            </Button>
        </ButtonWrapper>
    </Actions>
    <StyledWrapper>{
        Materials?.products?.map((el) => {
            console.log(el,'element');
            return <AdminShoppCard onEdit={() => openUpdateProductModal(el.productId)} onDelete={() => deleteProductHandler(el.productId)}  material={el}/>
        })
        }
    </StyledWrapper>
    <AddProductModal isOpen={saveProduct} onClose={toggleSave}/>
    <EditProductModal isOpen={editProduct} onClose={toggleEdit}/>
    </div>
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
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
  margin-top: 30px;
  margin-right: 20px;
`