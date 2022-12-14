import React , {useState} from 'react'
import Modal from '../UI/Modal'
import Input from '../UI/Input'
import styled from 'styled-components'
import Button from '../UI/Button'
import { useDispatch } from 'react-redux'
import { getAllProducts, editSubCategory } from '../../store/productSlice'
import { useSearchParams } from 'react-router-dom'

const EditSubCategoryModal = ({isOpen,onClose}) => {
  const [params] = useSearchParams()
  const categoryId = params.get('categoryId')
  const dispatch = useDispatch()
  const [data,setData] = useState({
      name:'',
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
     await dispatch(editSubCategory({id:categoryId,localData:data}))
     await dispatch(getAllProducts())
     onClose()
  }
 

  return (
    <Modal onClose={onClose} title="Изменить подкатегорию" isOpen={isOpen}>
        <InputsWrapper>
          <Input onChange={changeHandler} value={data.name} name="name" changeHandler label="название"/>
          <Input onChange={changeHandler} value={data.image} name="image" changeHandler label="изоброжение"/>
        </InputsWrapper>
        <ModalActions>
        <ButtonWrapper>
                <Button onClick={onClose}>Cancel</Button>
            </ButtonWrapper>
            <ButtonWrapper>
                <Button disabled={!data.name || !data.image} onClick={submit}>Save</Button>
            </ButtonWrapper>
        </ModalActions>
    </Modal>
  )
}

export default EditSubCategoryModal

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