import React from 'react'
import { Button } from '@mui/material'
import styled from '@emotion/styled'
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import ReviewsIcon from '@mui/icons-material/Reviews';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const MainHeader = () => {
  return (
    <StyledHeaderWrapper>
      <StyledLeftBlock>
          <StyledTitle>
            Большой выбор химии 
            для натурального камня, 
            керамогранита и плитки
          </StyledTitle>
          <StyledButton>
              Заказать товар
          </StyledButton>
      </StyledLeftBlock>
      <StyledRightBlock>
          <StyledList>
              <StyledItem>
                  <ContactSupportIcon/>
                 <ItemText>
                 Оперативная помощь в выборе
                 </ItemText>
              </StyledItem>
              <StyledItem>
                  <ReviewsIcon/>
                  <ItemText>
                  Рекомендуют более 200 производителей
                  натурального камня
                  </ItemText>
              </StyledItem>
              <StyledItem>
              <ReviewsIcon/>
                  <ItemText>
                  Рекомендуют более 200 производителей
                  натурального камня
                  </ItemText>
              </StyledItem>
          </StyledList>
      </StyledRightBlock>
    </StyledHeaderWrapper>
  )
}

export default MainHeader


const StyledTitle = styled.h1`
  color: white;
  width: 400px;
  margin: 0 auto;
  margin-bottom: 40px;
`

const StyledList= styled.ul``

const StyledItem = styled.li`
  width: 400px;
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const StyledButton = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 6px;
  margin: 0 auto;
  border: none;
`

const StyledRightBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
`

const StyledLeftBlock = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ItemText = styled.h3`
  margin-left: 20px;
`


const StyledHeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  background-color: #C4C4C4;
`

