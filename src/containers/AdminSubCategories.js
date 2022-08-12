import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { fake_sub_category } from '../data/fake_sub_category'
import CategoriesCard from '../components/UI/CategoriesCard'
import styled from 'styled-components'
import media from '../utils/helpers/media'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../components/UI/Button'
import AddSubCategoryModal from '../components/admin/AddSubCategoryModal'
import EditSubCategoryModal from '../components/admin/EditSubCategory'
import { deleteSubCategory, getAllProducts } from '../store/productSlice'
import AdminCategoriesCard from '../components/UI/AdminCategoryCard'
import { useSearchParams  } from 'react-router-dom'



const AdminSubCategories = () => {
  const [,setParams] = useSearchParams()
  const dispatch = useDispatch()
  const [saveModal,setSaveModal] = useState(false)
  const [editModal,setEditModal] = useState(false)
  useEffect(() => {
      dispatch(getAllProducts())
  },[])

  const toggleSave = () => setSaveModal(prev => !prev)
  const toggleEdit = () => setEditModal(prev => !prev)

  const {products} = useSelector(store => store.products)
  const {category} = useParams()
  const navigate = useNavigate()
  const currentCategory = products.find(product => product.id == category)
  const openCategory = (id) => {
      navigate(`${id}`)
  }

  const editOpenModal = (id) => {
     toggleEdit( )
     setParams({categoryId:id})
  }

  const deleteCategory = async (id) => {
    await dispatch(deleteSubCategory(id))
    await dispatch(getAllProducts())
  }

 
  return (
    <>
      <h1>Под категории</h1>
      <Actions>
        <ButtonWrapper>
           <Button onClick={toggleSave}>
               create new Sub category
           </Button>
        </ButtonWrapper>
      </Actions>
      <StyledWrapper>
        {currentCategory?.nextCategory.map((category) => {
            return (
                <AdminCategoriesCard onOpenCategory={openCategory} onEdit={() => editOpenModal(category.id)} onDelete={deleteCategory} category={category?.id} id={category?.id} title={category?.nameCategory || category.name} description={category?.description} img={category?.image}/>
            )
        })}
    </StyledWrapper>
    <AddSubCategoryModal categoryId={category} isOpen={saveModal} onClose={toggleSave}/>
    <EditSubCategoryModal isOpen={editModal} onClose={toggleEdit}/>
    </>
  )
}

export default AdminSubCategories


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

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 40px;
`

const ButtonWrapper = styled.div`
  width: fit-content;
`