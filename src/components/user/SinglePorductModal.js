import Modal from "../UI/Modal";
import React from 'react'
import styled from 'styled-components'
import { IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const SinglePorductModal = ({isOpen,onClose,modalData}) => {
  return (
    <Modal title="barsBekKot" onClose={onClose} isOpen={isOpen}>
       <StyledWrapper>
       <StyledImage src={modalData.image}/>
       <StyledTitle>
         {modalData.model}
       </StyledTitle>
       <StyledTitle>
         {modalData.manufacter}
       </StyledTitle>
       <StyledDescription>
           {modalData.about}
       </StyledDescription> 
       <StyledActions>
           <StyledButtonWrapper>
               <IconButton>
                <RemoveIcon/>
               </IconButton>
           </StyledButtonWrapper>
            <h5>
               {modalData.count}
            </h5>
           <StyledButtonWrapper>
              <IconButton>
                <AddIcon/>
               </IconButton>
           </StyledButtonWrapper>
       </StyledActions>
       </StyledWrapper>
    </Modal>
  )
}

export default SinglePorductModal


const StyledImage = styled.img`
  width: 30%;
  height: 5%;
  align-self: center;
`


const StyledTitle = styled.h1``


const StyledDescription = styled.h1``


const StyledWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
`

const StyledButtonWrapper = styled.div``

const StyledActions = styled.div``

