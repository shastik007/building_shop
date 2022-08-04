import { css } from 'styled-components'

const sizes = {
   tablet: 870,
   response: 500,
   mobile: 415,
}

export default Object.keys(sizes).reduce((acc, label) => {
   acc[label] = (...args) => css`
      @media (max-width: ${sizes[label]}px) {
         ${css(...args)};
      }
   `
   return acc
}, {})
