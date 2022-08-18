import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AdminOrderPage = () => {
  const { orderId } = useParams()
  const  {adminOrder } = useSelector(store => store.order)
    const currentOrder = adminOrder.find((order) => order.basketId == orderId)
   let totalSum = 0
  return (
    <Wrapper>
        <StyledName>{currentOrder?.fullName}</StyledName>
        <StyledNumber>{currentOrder?.number}</StyledNumber>
        <StyledOrder>
          {currentOrder?.productCards.map((product) => {
             totalSum +=product.productId.price
            return (
              <StyledOrderItems>
                <StyledMedia image={product.productId.image}/>
                <StyledInformation>
                <StyledProductName>
                  {product.productId.model}
                </StyledProductName>
                <StyledProdcutPrice>
                  {product.productId.price} руб
                </StyledProdcutPrice>
                </StyledInformation>
              </StyledOrderItems>
            )
          })}
        </StyledOrder>
        <TotalSum>Общая сумма : {totalSum} руб</TotalSum>
    </Wrapper>
  )
}

export default AdminOrderPage

const Wrapper = styled.div`
  text-align: center;
`

const StyledOrder = styled.div``


const StyledOrderItems = styled.div`
  display: flex;
  margin-bottom: 20px;
`


const StyledMedia = styled.div`
  width:200px;
  height: 200px;
  background-image: ${({image}) => `url(${image})`};
  background-size: contain;
  background-repeat: no-repeat;
`


const StyledNumber = styled.h4``


const StyledName = styled.h4``


const StyledProductName = styled.h5`
  margin-right: 10px;
`

const StyledProdcutPrice = styled.p`
  margin-right: 20px;
`

const StyledInformation = styled.div`
  width: 50%;
  margin-right:15px;
  margin: 0 auto;
`

const TotalSum = styled.h3``


