import React from 'react'
import Header from './Header'
import styled from 'styled-components'
import Footer from './Footer'
import SearchBar from './SearchBar'

const UserLayout = ({children}) => {
  return (
    <div>
      <Header/>
      <SearchBar/>
      <StyledBox>
        {children}
      </StyledBox>
      <Footer/>      
    </div>
  )
}

export default UserLayout

const StyledBox = styled.div`
  width: 95%;
  margin: 0 auto;
  margin-top: 100px;
`