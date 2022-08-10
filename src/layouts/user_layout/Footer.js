import styled from 'styled-components'
import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

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
         <WhatsAppIcon fontSize='large'/>
         <InstagramIcon fontSize='large'/>
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