import React, { useState } from 'react'
import Modal from '../UI/Modal'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Button from '../UI/Button'
import OrderItem from '../UI/OrderItem'
import { useDispatch } from 'react-redux'
import { orderActions } from '../../store'
import OrderFormModal from './OrderFormModal'


const OrderModal = ({isOpen,onClose}) => {
  const [isOpenModal,setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const { order } = useSelector(store => store.order)
  const addItem = (item) => {
    dispatch(orderActions.addItem(item))
  }

  const removeItem = (item) => {
    dispatch(orderActions.removeItem(item))
  }

  const toggleModal = () => setIsOpen(prev => !prev)

  const isDisableButton = order.length > 0 ? false  : true
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
            <Button variant="outlined" onClick={onClose}>Отменить</Button>
          </StyledButtonWrapper>
          <StyledButtonWrapper>
            <Button disabled={isDisableButton} onClick={toggleModal}>Заказать</Button>
          </StyledButtonWrapper>
        </ModalActionsWrapper>
        <OrderFormModal onClose={toggleModal} isOpen={isOpenModal}/>
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
  margin-right: 1%;
`
