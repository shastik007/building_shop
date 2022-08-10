import React from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import styled from 'styled-components'
import { IconButton } from '@mui/material';

const OrderItem = ({count,title,onAdd,onRemove,item,price}) => {
  return (
    <StyledOrderItem>
     <Name>{title}</Name>
     <Price>{price * count} руб</Price>
     <CounterWrapper>
       <IconButton onClick={() => onRemove(item)}>
        <RemoveIcon/>
       </IconButton>
       <Count>{count}</Count>
       <IconButton onClick={() => onAdd(item)}>
        <AddIcon/>
       </IconButton>
     </CounterWrapper>
    </StyledOrderItem>
  )
}

export default OrderItem


const StyledOrderItem = styled.div`
  width: 100%;
  display: flex;
  align-self: center;
  justify-content: space-between;
`

const CounterWrapper = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content:space-between;
`

const Count = styled.h3``

const Name = styled.h2``

const Price = styled.h2``