import styled from 'styled-components'
import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledName>Stromak</StyledName>
      <StyledContactsWrapper>
      <StyledAdress>
        город Москва , ул Хуего знает
      </StyledAdress>
      <StyledNumber>+778 34 782 827</StyledNumber>
      </StyledContactsWrapper>
      <StyledIconsWrapper>
         <a href='https://api.whatsapp.com/send?phone=996557800019'>
           <WhatsAppIcon/>
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
  background-color:#007aff;
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
`

const StyledContactsWrapper = styled.div`
  color: white;
  & a{
    text-decoration: none;
  }
`

const StyledNumber = styled.p``

const StyledAdress = styled.p``

const StyledIconsWrapper = styled.p`
  width: 80px;
  display: flex;
  justify-content: space-between;
  margin-right: 30px;
  color: white;
`

const StyledLink = styled(Link)`
 text-decoration: none;
`