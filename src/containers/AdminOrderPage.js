import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import media from '../utils/helpers/media'

const AdminOrderPage = () => {
  const { orderId } = useParams()
  const  {adminOrder } = useSelector(store => store.order)
    const currentOrder = adminOrder.find((order) => order.basketId == orderId)
    console.log(currentOrder);
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
                <Count>{product.count} шт</Count>
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
  width: 50%;
  margin: 0 auto;
  display: flex;
  margin-bottom: 20px;
  padding:10px;
  border: 1px solid gray;
  border-radius:5px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.15);
    transition: box-shadow 0.3s ease-in-out;
  &:hover{
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
  }
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

const TotalSum = styled.h3`
  margin-bottom: 100px;
  text-shadow: 0 1px 2px rgba(0,0,0,0.15);
    transition: text-shadow 0.3s ease-in-out;
  &:hover{
    text-shadow: 0 10px 25px rgba(0,0,0,0.3);
  }
`


const Count = styled.p``


