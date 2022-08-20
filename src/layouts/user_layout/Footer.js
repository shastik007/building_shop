import styled from 'styled-components'
import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import media from '../../utils/helpers/media'

const Footer = () => {
  return (
    <StyledFooter>
      <StyledName>STROY</StyledName>
      <StyledContactsWrapper>
      <StyledAdress>
        Видное , 26 км Мкад Каширское шоссе , вл 32
      </StyledAdress>
      <StyledNumber>+7 977 407-70-81</StyledNumber>
      </StyledContactsWrapper>
      <StyledIconsWrapper>
         <a href='https://api.whatsapp.com/send?phone=79774077081'>
           <WhatsAppIcon fontSize='large'/>
         </a>
         <a href='https://www.instagram.com/mapaevvv/'>
            <InstagramIcon fontSize='large'/>
         </a>
      </StyledIconsWrapper>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  width:100%;
  height:80px;
  background-color:orange;
  margin-top: 40px;
  position: fixed;
  bottom: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledName = styled.h1`
 margin-left: 30px;
 color: white;
 width: 15%;
 ${
    media.mobile`
     font-size:16px;
    `
  }
`

const StyledContactsWrapper = styled.div`
  width: 30%;
  color: white;
  & a{
    text-decoration: none;
  }
  ${
    media.mobile`
     font-size:10px;
     dispaly-flex;
     justify-content:flex-end;
     width: 30%;
    `
  }
`

const StyledNumber = styled.p``

const StyledAdress = styled.p``

const StyledIconsWrapper = styled.p`
  width: 7%;
  display: flex;
  justify-content: space-between;
  margin-right: 30px;
  color: white;
  ${
    media.mobile`
     width: 15%;
    `
  }
`
