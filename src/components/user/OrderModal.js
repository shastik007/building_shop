import React, { useState } from 'react'
import Modal from '../UI/Modal'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Button from '../UI/Button'
import OrderItem from '../UI/OrderItem'
import { useDispatch } from 'react-redux'
import { orderActions, productActons } from '../../store'
import SendOrderModal from '../../containers/SendOrderModal'
import media from '../../utils/helpers/media'



const OrderModal = ({isOpen,onClose}) => {
  const [isOpenModal,setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const { order } = useSelector(store => store.order)
  const {token} = useSelector(store => store.auth)
  const addItem = (item) => {
    dispatch(orderActions.addItem(item))
    dispatch(productActons.increment(item.productId))
  }

  const removeItem = (item) => {
    dispatch(orderActions.removeItem(item))
    dispatch(productActons.decrement(item.productId))
  }

  const toggleModal = () => setIsOpen(prev => !prev)
  

  const sendOrder = () => {
      if (token) {
        alert('working')
      }
      toggleModal()
  }

  const isDisableButton = order.length > 0 ? false  : true

  let totalSum = 0
  return (
    <Modal onClose={onClose} title="Корзина" isOpen={isOpen}>
        {
          order.length > 0 ? order.map((el) => {
            {totalSum += el.price * el.count}
            return <StyledItem>
              <OrderItem price={el.price} onRemove={removeItem} onAdd={addItem} item={el} count={el.count} title={el.model} />
            </StyledItem>

          }) : <StyledEmpty>Ваша корзина пуста</StyledEmpty>
        }
        <StyledTotalSum>
        Общая сумма :   { totalSum} руб
        </StyledTotalSum>
        <ModalActionsWrapper>
        <StyledButtonWrapper>
            <Button variant="outlined" onClick={onClose}>Отменить</Button>
          </StyledButtonWrapper>
          <StyledButtonWrapper>
            <Button disabled={isDisableButton} onClick={sendOrder}>Заказать</Button>
          </StyledButtonWrapper>
        </ModalActionsWrapper>
        <SendOrderModal onClose={toggleModal} isOpen={isOpenModal}/>
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
  width: 35%;
  margin-right: 1%;
`

const StyledEmpty = styled.h4`
  text-align: center;
  ${
    media.mobile`
      font-size:20px;
    `
  }
`

const StyledTotalSum = styled.h4`
  display: flex;
  justify-content: flex-end;
  ${
    media.mobile`
      font-size:14px;
    `
  }
`
