import React from 'react'
import styled from 'styled-components'
import ShoppCard from '../components/UI/Card'

const MainPage = () => {
  return (
    <StyledWrapper>
        <ShoppCard/>
        <ShoppCard/>
        <ShoppCard/>
        <ShoppCard/>
        <ShoppCard/>
        <ShoppCard/>
    </StyledWrapper>
  )
}

export default MainPage


const StyledWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`