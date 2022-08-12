import React , {useEffect,useState} from 'react'
import { useDispatch } from 'react-redux'
import { deleteCategoryWithId, getAllProducts } from '../store/productSlice'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import media from '../utils/helpers/media'
import Button from '../components/UI/Button'
import AddCategoryModal from '../components/admin/AddCategoryModal'
import AdminCategoriesCard from '../components/UI/AdminCategoryCard'
import EditCategoryModal from '../components/admin/EditCategoryModal'
import { useSearchParams } from 'react-router-dom'


const AdminPage = () => {
    const dispatch = useDispatch()
    const [,setParams] = useSearchParams()
    const [isOpen,setIsOpen] = useState(false)
    const [isOpenEdit,setIsOpenEdit] = useState(false)
    const {products} = useSelector(store => store.products)
      useEffect(() => {
        dispatch(getAllProducts())
      },[])

     const toggle = () => setIsOpen(prev => !prev) 

     const toggleEdit = () => setIsOpenEdit(prev => !prev)
     
     const deleteCategory  = async (id) => {
         console.log(id);
         await dispatch(deleteCategoryWithId(id))
         await dispatch(getAllProducts())
     }

     const editOpenModal = (id) => {
        toggleEdit()
        setParams({categoryId:id})
     }
  return (
    <div>
        <Actions>
            <StyledButtonWrapper>
                <Button onClick={toggle}>Create new Category</Button>
            </StyledButtonWrapper>
        </Actions>
        <StyledWrapper>
        {products.map((categor) => {
          return <AdminCategoriesCard onEdit={() => editOpenModal(categor.id)} onDelete={deleteCategory} category={categor?.id} id={categor?.id} title={categor?.nameCategory} description={categor?.description} img={categor?.image}/>
        })}
    </StyledWrapper>
    <AddCategoryModal isOpen={isOpen} onClose={toggle}/>
    <EditCategoryModal isOpen={isOpenEdit} onClose={toggleEdit} />
    </div>
  )
}

export default AdminPage


const StyledWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 30px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  margin-bottom: 80px;
  background-color: #C4C4C4;
  
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

const StyledButtonWrapper  =  styled.div`
  width:20%;
`

const Actions= styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  margin-bottom: 30px;
`