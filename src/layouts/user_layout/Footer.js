import styled from 'styled-components'
import React from 'react'

const Footer = () => {
  return (
    <StyledFooter>Footer</StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  width:100%;
  height:70px;
  background-color:#007aff;
  margin-top: 40px;
  position: fixed;
  bottom: 0;
  z-index: 100;
`