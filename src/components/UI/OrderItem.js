import React from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import styled from 'styled-components'
import { IconButton } from '@mui/material';
import media from '../../utils/helpers/media';

const OrderItem = ({count,title,onAdd,onRemove,item,price}) => {
  return (
    <StyledOrderItem>
     <Name>{title}</Name>
     <CounterWrapper>
       <IconButton onClick={() => onRemove(item)}>
        <RemoveIcon/>
       </IconButton>
       <Count>{count}</Count>
       <IconButton onClick={() => onAdd(item)}>
        <AddIcon/>
       </IconButton>
     </CounterWrapper>
     <Price>{price * count} руб</Price>
    </StyledOrderItem>
  )
}

export default OrderItem


const StyledOrderItem = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid gray;
`

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  justify-content: center;
`

const Count = styled.h4`

  ${
   media.mobile`
     font-size:14px;
     margin:0;
   `
 }
`

const Name = styled.h4`
    text-align: start;
    color: blue;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    cursor: pointer;
 ${
   media.mobile`
     font-size:14px;
     margin:0;
     width: 100%;
     -webkit-line-clamp: 2;
   `
 }
`

const Price = styled.h4`
  ${
   media.mobile`
     font-size:14px;
     margin:0;
   `
 }
`