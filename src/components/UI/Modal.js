import { Box, styled, Typography } from '@mui/material'
import Backdrop from '@mui/material/Backdrop'
import MuiModal from '@mui/material/Modal'

function Modal({ children, isOpen, onClose, title ,width }) {
   return (
      <MuiModal
         open={isOpen}
         onClose={onClose}
         BackdropComponent={Backdrop}
         BackdropProps={{
            timeout: 500,
         }}
      >
         <StyledBox width={width}>
            <ModalTitle>{title}</ModalTitle>
            <ModalContent>{children}</ModalContent>
         </StyledBox>
      </MuiModal>
   )
}


const StyledBox = styled(Box)`
   width:${({width}) => width || '90%'};
   background: #ffffff;
   position: absolute;
   left: 50%;
   top: 40%;
   transform: translate(-50%, -50%);
   color: #ffffff;
`
const ModalTitle = styled(Typography)`
   background: orange;
   height: 68px;
   text-align: center;
   padding-top: 25px;
   box-sizing: border-box;
   letter-spacing: 0.3rem;
   font-size: 19px;
`

const ModalContent = styled(Box)`
   padding-top: 16px;
   padding-bottom: 22px;
   padding-left: 25px;
   padding-right: 25px;
   color: black;
   max-height: 500px;
   overflow:scroll;
   overflow-x:hidden;
`

export default Modal