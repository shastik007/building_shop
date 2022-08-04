import { Box, styled, Typography } from '@mui/material'
import Backdrop from '@mui/material/Backdrop'
import MuiModal from '@mui/material/Modal'
import PropTypes from 'prop-types'

function Modal({ children, isOpen, onClose, title }) {
   return (
      <MuiModal
         open={isOpen}
         onClose={onClose}
         BackdropComponent={Backdrop}
         BackdropProps={{
            timeout: 500,
         }}
      >
         <StyledBox>
            <ModalTitle>{title}</ModalTitle>
            <ModalContent>{children}</ModalContent>
         </StyledBox>
      </MuiModal>
   )
}

Modal.propTypes = {
   children: PropTypes.string.isRequired,
   isOpen: PropTypes.bool.isRequired,
   onClose: PropTypes.func.isRequired,
   title: PropTypes.string,
}
Modal.defaultProps = {
   title: '',
}

const StyledBox = styled(Box)`
   width: 541px;
   max-height: 561px;
   background: #ffffff;
   border-radius: 10px;
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   color: #ffffff;
`
const ModalTitle = styled(Typography)`
   background: #3772ff;
   border-radius: 10px 10px 0px 0px;
   height: 68px;
   text-align: center;
   padding-top: 25px;
   box-sizing: border-box;
`

const ModalContent = styled(Box)`
   padding-top: 16px;
   padding-bottom: 22px;
   padding-left: 25px;
   padding-right: 25px;
   color: black;
`

export default Modal