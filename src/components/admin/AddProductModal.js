import React , {useState} from 'react'
import Modal from '../UI/Modal'
import Input from '../UI/Input'
import styled from 'styled-components'
import Button from '../UI/Button'
import { useDispatch } from 'react-redux'
import { getAllProducts, saveProduct } from '../../store/productSlice'
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
     await dispatch(saveProduct({id,localData:data}))
     await dispatch(getAllProducts())
     setData({
        manufacturer: "",
        model: "",
        weight: 0,
        price: 0,
        about: "",
        image: ""
      })
     onClose()
  }
 

  return (
    <Modal onClose={onClose} title="Добавить продукт" isOpen={isOpen}>
        <InputsWrapper>
          <Input onChange={changeHandler} value={data.manufacturer} name="manufacturer" changeHandler label="производитель"/>
          <Input onChange={changeHandler} value={data.model} name="model" changeHandler label="модель"/>
          <Input type="number" onChange={changeHandler} value={data.weight} name="weight" changeHandler label="вес"/>
          <Input type="number" onChange={changeHandler} value={data.price} name="price" changeHandler label="стоимость"/>
          <Input onChange={changeHandler} value={data.about} name="about" changeHandler label="о продукте"/>
          <Input onChange={changeHandler} value={data.image} name="image" changeHandler label="изоброжение"/>
        </InputsWrapper>
        <ModalActions>
        <ButtonWrapper>
                <Button onClick={onClose}>Отменить</Button>
            </ButtonWrapper>
            <ButtonWrapper>
                <Button disabled={!data.price || !data.image || !data.model} onClick={submit}>Созранить</Button>
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