import React from 'react'
import MuiButton from '@mui/material/Button'
import { styled } from '@mui/material'
import PropTypes from 'prop-types'

export default function Button({ children, ...props }) {
   return <StyledButton {...props}>{children}</StyledButton>
}
Button.propTypes = {
   children: PropTypes.string.isRequired,
   variant: PropTypes.string,
}
Button.defaultProps = {
   variant: 'contained',
}
const StyledButton = styled(MuiButton)`
   width: 100%;
   height: 100%;
   box-shadow: none;
   border-radius: 8px;
   text-transform: none;
   font-size: 16px;
   font-weight: 600;
   padding: 11px 24px;
   color: #ffffff;
   &.MuiButton-contained {
      background: #3772ff;
      &:hover {
         box-shadow: none;
         background: #1d60ff;
      }
      &:active {
         box-shadow: none;
         background: #6190ff;
      }
      &:disabled {
         background: rgba(28, 27, 31, 0.12);
      }
   }
   &.MuiButton-outlined {
      border: 1px solid;
      color: #3772ff;
      &:hover {
         box-shadow: none;
         background: rgba(29 96 255 0.1);
      }
      &:active {
         box-shadow: none;
         background: rgba(97 144 255 0.3);
      }
   }
`
