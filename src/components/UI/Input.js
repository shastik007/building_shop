import { styled, TextField } from '@mui/material'
import { forwardRef } from 'react'

const Input = forwardRef((props, ref) => {
   return <StyledInput size="small" ref={ref} {...props} />
})

export default Input


const StyledInput = styled(TextField)`
   &.MuiFormControl-root {
      width: 100%;
   }
   .MuiInputBase-formControl {
      min-width: 100px;
      height: 42px;
      border-radius: 10px;
      padding: 10px 8px;
   }
   .MuiInputLabel-root {
      transform: translate(20px, 10px);
   }
   .MuiInputLabel-shrink {
      transform: translate(14px, -10px);
      font-size: 13px;
      line-height: 19px;
   }
`
