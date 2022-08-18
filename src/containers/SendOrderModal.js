import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../components/UI/Button'
import Input from '../components/UI/Input'
import Modal from '../components/UI/Modal'
import { useDispatch } from 'react-redux'
import { signUp } from '../store/authSlice'
import { useSelector } from 'react-redux'
import { sendOrder } from '../store/orderSlice'

const SendOrderModal = ({isOpen,onClose}) => {
    const dispatch = useDispatch()
    const {order} = useSelector(store => store.order)
    const newOrderList = order.map((item) => {
        return {
            count:item.count,
            productId:item.productId
        }
    })


    const [data,setData] = useState({
        phoneNumber:'',
        fullName:''
    })
    
    const changeHandler =(e) => {
      const {value,name} = e.target
      setData((prev) => {
          return {
              ...prev,
              [name]:value
          }
      }) 
    }

    const submitHandler = async () => {
       await dispatch(sendOrder({
          orders:newOrderList,
          ...data,
        }))

      onClose()
    }
  return (
    <Modal onClose={onClose} title="Обратная связь"  isOpen={isOpen}>
      <InputsWrapper>
         <Input value={data.fullName} name="ФИО" onChange={changeHandler} label="fullName" />
       </InputsWrapper>
       <InputsWrapper>
         <Input value={data.phoneNumber} name="номер" onChange={changeHandler} label="phoneNumber"/>
       </InputsWrapper> 
       <ActionsWrapper>
           <ButtonWrapper>
               <Button onClick={onClose} variant="outlined">отмена</Button>
           </ButtonWrapper>
           <ButtonWrapper onClick={submitHandler}>
               <Button disabled={!data.fullName || !data.phoneNumber}>Заказать</Button>
           </ButtonWrapper>
       </ActionsWrapper>
    </Modal>
  )
}

export default SendOrderModal
const ActionsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`
const ButtonWrapper = styled.div`
  width: 40%;
  margin-right: 2%;
`

const InputsWrapper = styled.div`
  margin-bottom: 8px;
`