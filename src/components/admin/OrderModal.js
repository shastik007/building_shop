import React , {useEffect} from 'react'
import Modal from '../UI/Modal'
import styled from 'styled-components'
import { useSelector ,useDispatch} from 'react-redux'
import { getAllOrder } from '../../store/orderSlice'
import { useNavigate } from 'react-router-dom'

const OrderModal = ({isOpen,onClose}) => {
    const navigate =  useNavigate()
    const dispatch = useDispatch()
    const { adminOrder } = useSelector(store => store.order)

    useEffect(() => {
       dispatch(getAllOrder())
    },[])

    const openBasket = (basketId) => {
        navigate(`/admin/order/${basketId}`)
        onClose()
    }

    console.log(adminOrder,'this is all order');
  return (
    <Modal title="Все заказы" isOpen={isOpen} onClose={onClose}>
       <StyledAdminOrder>
         {adminOrder.map((item) => {
           return (
             <StyledAdminOrderItem onClick={() => { openBasket(item.basketId)}}>
               <StyledName>
               {item.fullName}
               </StyledName>
               <StyledNumber>
                 {item.number}
               </StyledNumber>
             </StyledAdminOrderItem>
           )
         })}
       </StyledAdminOrder>
    </Modal>
  )
}

export default OrderModal


const StyledAdminOrder = styled.div``

const StyledAdminOrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;

`

const StyledName = styled.h3`
  text-transform: uppercase;
`
const StyledNumber = styled.h4``



