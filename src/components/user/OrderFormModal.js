import React from 'react'
import Modal from '../UI/Modal'
import Input from '../UI/Input'
import Button from '../UI/Button'
import styled from 'styled-components'

const OrderFormModal = ({isOpen,onClose}) => {
  return (
    <Modal onClose={onClose} title="Оставте данные чтоб мы согли с вами связаться" width="40%" isOpen={isOpen}>
       <InputsWrapper>
         <Input label="ФИО" />
       </InputsWrapper>
       <InputsWrapper>
         <Input label="телфонный номер"/>
       </InputsWrapper>
       <InputsWrapper>
         <Input label="email адресс"/>
       </InputsWrapper>
       <ActionsWrapper>
           <ButtonWrapper>
               <Button onClick={onClose} variant="outlined">отмена</Button>
           </ButtonWrapper>
           <ButtonWrapper>
               <Button>связаться</Button>
           </ButtonWrapper>
       </ActionsWrapper>
    </Modal>
  )
}

export default OrderFormModal
const ActionsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`
const ButtonWrapper = styled.div`
  width: 50%;
  margin-right: 2%;
`

const InputsWrapper = styled.div`
  margin-bottom: 8px;
`