import React , {useEffect} from 'react'
import Modal from '../UI/Modal'
import styled from 'styled-components'
import { useSelector ,useDispatch} from 'react-redux'
import { getAllOrder } from '../../store/orderSlice'

const OrderModal = ({isOpen,onClose}) => {
    const dispatch = useDispatch()
    const { adminOrder } = useSelector(store => store.order)

    useEffect(() => {
       dispatch(getAllOrder())
    })

    console.log(adminOrder,'this is all order');
  return (
    <Modal title="Все заказы" isOpen={isOpen} onClose={onClose}>OrderModal</Modal>
  )
}

export default OrderModal