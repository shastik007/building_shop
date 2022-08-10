import React from 'react'
import Modal from '../UI/Modal'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Button from '../UI/Button'
import OrderItem from '../UI/OrderItem'


const OrderModal = ({isOpen,onClose}) => {
  const { order } = useSelector(store => store.order)
  return (
    <Modal onClose={onClose} title="Корзина" isOpen={isOpen}>
        {
          order.length > 0 ? order.map((el) => {
            return <StyledItem>
              <OrderItem count={el.count} title={el.title} />
            </StyledItem>
          }) : <h1>Ваша корзина пуста</h1>
        }
        <ModalActionsWrapper>
          <StyledButtonWrapper>
            <Button>Заказать</Button>
          </StyledButtonWrapper>
        </ModalActionsWrapper>
    </Modal>
  )
}

export default OrderModal


const StyledItem = styled.div`
  
`

const ModalActionsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const StyledButtonWrapper = styled.div`
  width: 20%;
`
