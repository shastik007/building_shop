import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AdminOrderPage = () => {
  const { basketId } = useParams()
  const  {adminOrder } = useSelector(store => store.order)
  const currentOrder = adminOrder.find(order => order.basketId == basketId)
  return (
    <div>
      
    </div>
  )
}

export default AdminOrderPage

