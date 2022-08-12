import React , {useState} from 'react'
import Modal from '../UI/Modal'
import Input from '../UI/Input'
import styled from 'styled-components'
import Button from '../UI/Button'
import { useDispatch } from 'react-redux'
import { getAllProducts, saveSubCategory } from '../../store/productSlice'


const AddSubCategoryModal = ({isOpen,onClose,categoryId}) => {
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
     await dispatch(saveSubCategory({id:categoryId,localData:data}))
     await dispatch(getAllProducts())
     onClose()
  }
 

  return (
    <Modal onClose={onClose} title="save category" isOpen={isOpen}>
        <InputsWrapper>
          <Input onChange={changeHandler} value={data.name} name="name" changeHandler label="name"/>
          <Input onChange={changeHandler} value={data.image} name="image" changeHandler label="image"/>
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

export default AddSubCategoryModal

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