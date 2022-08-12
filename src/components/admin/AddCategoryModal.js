import React , {useState} from 'react'
import Modal from '../UI/Modal'
import Input from '../UI/Input'
import styled from 'styled-components'
import Button from '../UI/Button'
import { useDispatch } from 'react-redux'
import { getAllProducts, saveCategory } from '../../store/productSlice'


const AddCategoryModal = ({isOpen,onClose}) => {
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
     await dispatch(saveCategory(data))
     await dispatch(getAllProducts())
  }
 

  return (
    <Modal onClose={onClose} title="save category" isOpen={isOpen}>
        <InputsWrapper>
          <Input onChange={changeHandler} value={data.nameCategory} name="nameCategory" changeHandler label="name"/>
          <Input onChange={changeHandler} value={data.image} name="image" changeHandler label="image"/>
        </InputsWrapper>
        <ModalActions>
        <ButtonWrapper>
                <Button onClick={onClose}>Cancel</Button>
            </ButtonWrapper>
            <ButtonWrapper>
                <Button disabled={!data.nameCategory || !data.image} onClick={submit}>Save</Button>
            </ButtonWrapper>
        </ModalActions>
    </Modal>
  )
}

export default AddCategoryModal

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