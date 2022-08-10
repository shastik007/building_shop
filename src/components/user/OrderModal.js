import React from 'react'
import Modal from '../UI/Modal'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Button from '../UI/Button'
import OrderItem from '../UI/OrderItem'
import { useDispatch } from 'react-redux'
import { orderActions } from '../../store'


const OrderModal = ({isOpen,onClose}) => {
  const dispatch = useDispatch()
  const { order } = useSelector(store => store.order)
  const addItem = (item) => {
    dispatch(orderActions.addItem(item))
  }

  const removeItem = (item) => {
    dispatch(orderActions.removeItem(item))
  }
  return (
    <Modal onClose={onClose} title="Корзина" isOpen={isOpen}>
        {
          order.length > 0 ? order.map((el) => {
            return <StyledItem>
              <OrderItem price={el.price} onRemove={removeItem} onAdd={addItem} item={el} count={el.count} title={el.title} />
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
