import React from 'react'
import styled from '@emotion/styled'
import Button from '../components/UI/Button'
import media from '../utils/helpers/media'

const MainHeader = () => {
  return (
    <StyledHeaderWrapper>
          <StyledTitle>
          Интернет магазин строительных материалов "Строй Смесь"
          предлагает для своих покупателей широкий ассортимент
           строительных материалов.
          </StyledTitle>
    </StyledHeaderWrapper>
  )
}

export default MainHeader


const StyledTitle = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 40px;
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #ffff 0%,
    orange 29%,
    #ffff 67%,
    #ffff 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
  font-size: 18px;

 @keyframes textclip {
  to {
    background-position: 200% center;
  }

  
}

`







const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 400px;
  background-image: url('https://img.freepik.com/free-photo/variety-handy-tools-on-dark-background-labor-day-background-concept_1150-41808.jpg?w=1380&t=st=1660152549~exp=1660153149~hmac=06c4af61f6e0fdceac7e372f2fff61b5320d2d57618bf308dd9df436a520c47b');
  background-size: cover;
  background-repeat: no-repeat;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  
`

