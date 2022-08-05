import React from 'react'
import Modal from '../UI/Modal'

const OrderModal = ({isOpen,onClose}) => {
  return (
    <Modal onClose={onClose} title="Корзина" isOpen={isOpen}>
        hello world
    </Modal>
  )
}

export default OrderModal