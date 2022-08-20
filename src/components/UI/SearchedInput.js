import React from 'react'
import styled from 'styled-components'

const SearchedInput = ({title,onCardClick}) => {
  return (
    <StyledSearchedItem onClick={onCardClick}>
        {title}
    </StyledSearchedItem>
  )
}

export default SearchedInput


const StyledSearchedItem = styled.div`
  width:100%;
  height:50px;
  border-radius: 5px;
  color: gray;
  border: 1px solid gray;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  cursor: pointer;
  margin-bottom: 5px;
`
