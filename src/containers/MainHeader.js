import React from 'react'
import styled from '@emotion/styled'
import Button from '../components/UI/Button'

const MainHeader = () => {
  return (
    <StyledHeaderWrapper>
      <StyledLeftBlock>
          <StyledTitle>
            Большой выбор химии 
            для натурального камня, 
            керамогранита и плитки
          </StyledTitle>
          <StyledButtonWrapper>
            <Button>
              Заказать товар
            </Button>
          </StyledButtonWrapper>
        </StyledLeftBlock>
    </StyledHeaderWrapper>
  )
}

export default MainHeader


const StyledTitle = styled.h1`
  color: white;
  text-shadow: 1px 1px black;
  width: 400px;
  margin: 0 auto;
  margin-bottom: 40px;
`


const StyledButtonWrapper = styled.div`
  width: 200px;
  
`

const StyledLeftBlock = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 400px;
  background-image: url('https://img.freepik.com/free-photo/variety-handy-tools-on-dark-background-labor-day-background-concept_1150-41808.jpg?w=1380&t=st=1660152549~exp=1660153149~hmac=06c4af61f6e0fdceac7e372f2fff61b5320d2d57618bf308dd9df436a520c47b');
  background-size: cover;
  background-repeat: no-repeat;
`

