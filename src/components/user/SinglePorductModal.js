import Modal from "../UI/Modal";
import React from 'react'
import styled from 'styled-components'


const SinglePorductModal = ({isOpen,onClose,modalData}) => {
  return (
    <Modal title="barsBekKot" onClose={onClose} isOpen={isOpen}>
       <StyledWrapper>
         <StyledImageWrapper>
           <StyledImage image={modalData.image}/>
         </StyledImageWrapper>
        <StyledInformationWrapper>
        <StyledTitle>
         {modalData.model}
       </StyledTitle>
       <StyledTitle>
         {modalData.manufacter}
       </StyledTitle>
       <StyledDescription>
           {modalData.about}
       </StyledDescription> 
        </StyledInformationWrapper>
       </StyledWrapper>
    </Modal>
  )
}

export default SinglePorductModal


const StyledImage = styled.div`
  width: 100%;
  height: 300px;
  background-image: ${({image}) => `url(${image})`};
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0 auto;
  margin-top: 20px;
`


const StyledTitle = styled.h1`

`


const StyledDescription = styled.p``


const StyledWrapper = styled.div`
   display: flex;
   justify-content: space-around;

`

const StyledButtonWrapper = styled.div`
`

const StyledActions = styled.div``

const StyledImageWrapper = styled.div`
  width: 20%;
`


const StyledInformationWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

`