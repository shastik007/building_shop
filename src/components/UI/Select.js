import { Select as SelectInput, styled } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'


const MenuProps = {
   PaperProps: {
      style: {
         maxHeight: 301,
         borderRadius: 10,
      },
   },
}

export default function Select({
   options,
   label,
   value,
   getOptionValue,
   getOptionLabel,
   getOptionId,
   ...props
}) {
   return (
      <StyledForm>
         <StyledLabel>{label}</StyledLabel>
         <StyledSelect
            MenuProps={MenuProps}
            label={label}
            value={value}
            {...props}
         >
            {options.map((item) => {
               return (
                  <StyledItem
                     value={getOptionValue ? getOptionValue(item) : item.id}
                     key={getOptionId ? getOptionId(item) : item.id}
                  >
                     {getOptionLabel ? getOptionLabel(item) : item.value}
                  </StyledItem>
               )
            })}
         </StyledSelect>
      </StyledForm>
   )
}


const StyledForm = styled(FormControl)`
   width: 100%;
   & .MuiOutlinedInput-root {
      &.Mui-focused fieldset {
         border-color: #1f6ed4;
      }
   }
`
const StyledLabel = styled(InputLabel)`
   &.MuiInputLabel-root {
      top: -8px;
   }
   &.MuiInputLabel-shrink {
      &.Mui-focused {
         color: #838e9c;
      }
      font-size: 13px;
      line-height: 22px;
      transform: translate(14px, -5px);
   }
`

const StyledItem = styled(MenuItem)`
   &.MuiMenuItem-root {
      height: 43px;
      width: 100%;
      background: white;
      font-size: 16px;
      font-style: normal;
      font-family: 'OpenSans';
      line-height: 22px;
      letter-spacing: 0.02em;
      color: #020202;
      font-weight: 400;
      span {
         margin-left: 10px;
         border-bottom: 1px solid #ececec;
      }
      &:last-child {
         span {
            border-bottom: none;
         }
      }
      &:hover,
      :focus {
         background: rgba(26, 35, 126, 0.07);
      }
   }
   width: 100%;
`
const StyledSelect = styled(SelectInput)`
   height: 42px;
`
