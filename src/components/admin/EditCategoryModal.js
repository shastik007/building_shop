import React , {useState} from 'react'
import Modal from '../UI/Modal'
import Input from '../UI/Input'
import styled from 'styled-components'
import Button from '../UI/Button'
import { useDispatch } from 'react-redux'
import { getAllProducts, editCategory } from '../../store/productSlice'
import { useSearchParams } from 'react-router-dom'

const EditCategoryModal = ({isOpen,onClose}) => {
   const [params] = useSearchParams()
   const categoryId = params.get('categoryId')
   const dispatch = useDispatch()
   const [data,setData] = useState({
      nameCategory:'',
      image:''
  })

  const changeHandler = (e) => {
      const {name,value} = e.target
      setData(prev => {
          return {
              ...prev,
              [name]:value
          }
      })
  }

  const submit = async () => {
     await dispatch(editCategory({id:categoryId,localData:data}))
     await dispatch(getAllProducts())
  }
 

  return (
    <Modal onClose={onClose} title="Изменить категорию" isOpen={isOpen}>
        <InputsWrapper>
          <Input onChange={changeHandler} value={data.nameCategory} name="nameCategory" changeHandler label="Название"/>
          <Input onChange={changeHandler} value={data.image} name="image" changeHandler label="изоброжение"/>
        </InputsWrapper>
        <ModalActions>
        <ButtonWrapper>
                <Button onClick={onClose}>Отменить</Button>
            </ButtonWrapper>
            <ButtonWrapper>
                <Button disabled={!data.nameCategory || !data.image} onClick={submit}>Сохранить</Button>
            </ButtonWrapper>
        </ModalActions>
    </Modal>
  )
}

export default EditCategoryModal

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`

const ButtonWrapper = styled.div`
  width: 50%;
`

const ModalActions = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`