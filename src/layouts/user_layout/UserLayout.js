import React from 'react'
import Header from './Header'
import styled from 'styled-components'


const UserLayout = ({children}) => {
  return (
    <div>
      <Header/>
      <StyledBox>
        {children}
      </StyledBox>      
    </div>
  )
}

export default UserLayout

const StyledBox = styled.div`
  width: 95%;
  margin: 0 auto;
`