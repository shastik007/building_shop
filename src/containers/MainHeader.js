import React from 'react'
import styled from '@emotion/styled'
import media from '../utils/helpers/media'

const MainHeader = () => {
  return (
    <StyledHeaderWrapper>
          <StyledTitle>
          Интернет магазин строительных материалов 
          предлагает для своих покупателей широкий ассортимент
           строительных материалов.
          </StyledTitle>
    </StyledHeaderWrapper>
  )
}

export default MainHeader


const StyledTitle = styled.span`
  width: 100%;
  color: white;
  text-align: center;
  margin-bottom: 40px;
  font-family: cursive;
  font-size: 35px;
  ${
    media.mobile`
      font-size:14px;
    `
  }
`







const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 500px;
  background-image: url('https://img.freepik.com/free-photo/variety-handy-tools-on-dark-background-labor-day-background-concept_1150-41808.jpg?w=1380&t=st=1660152549~exp=1660153149~hmac=06c4af61f6e0fdceac7e372f2fff61b5320d2d57618bf308dd9df436a520c47b');
  background-size: cover;
  background-repeat: no-repeat;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

