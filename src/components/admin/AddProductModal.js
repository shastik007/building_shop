import React , {useState} from 'react'
import Modal from '../UI/Modal'
import Input from '../UI/Input'
import styled from 'styled-components'
import Button from '../UI/Button'
import { useDispatch } from 'react-redux'
import { getAllProducts, saveCategory } from '../../store/productSlice'
import { useParams } from 'react-router-dom'


const AddProductModal = ({isOpen,onClose}) => {
  const dispatch = useDispatch()
  const {id} = useParams()
  const [data,setData] = useState({
    manufacturer: "",
    model: "",
    weight: 0,
    price: 0,
    about: "",
    image: ""
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
    <Modal onClose={onClose} title="save product" isOpen={isOpen}>
        <InputsWrapper>
          <Input onChange={changeHandler} value={data.manufacturer} name="manufacturer" changeHandler label="manufacturer"/>
          <Input onChange={changeHandler} value={data.model} name="model" changeHandler label="model"/>
          <Input type="number" onChange={changeHandler} value={data.weight} name="weight" changeHandler label="weight"/>
          <Input type="number" onChange={changeHandler} value={data.price} name="price" changeHandler label="price"/>
          <Input onChange={changeHandler} value={data.about} name="about" changeHandler label="about"/>
          <Input onChange={changeHandler} value={data.image} name="image" changeHandler label="image"/>
        </InputsWrapper>
        <ModalActions>
        <ButtonWrapper>
                <Button onClick={onClose}>Cancel</Button>
            </ButtonWrapper>
            <ButtonWrapper>
                <Button disabled={!data.price || !data.image || !data.model} onClick={submit}>Save</Button>
            </ButtonWrapper>
        </ModalActions>
    </Modal>
  )
}

export default AddProductModal

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