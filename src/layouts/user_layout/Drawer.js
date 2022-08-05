import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';



const TemporaryDrawer = () => {
   const [sideBarPosition, setsideBarPosition] = React.useState({
      left: false,
   })
   const toggleDrawer = (anchor, open) => (event) => {
      if (
         event.type === 'keydown' &&
         (event.key === 'Tab' || event.key === 'Shift')
      ) {
         return
      }

      setsideBarPosition({ ...sideBarPosition, [anchor]: open })
   }

   const renderSideBarList = (anchor) => (
      <StyledRenderSideBar anchor={anchor} role="presentation">
         hello wrold 
      </StyledRenderSideBar>
   )

   return (
      <StyledBox>
         <MenuIcon onClick={toggleDrawer('left', true)} />
         <Drawer
            anchor="left"
            open={sideBarPosition.left}
            onClose={toggleDrawer('left', false)}
         >
            {renderSideBarList('left')}
         </Drawer>
      </StyledBox>
   )
}

export default TemporaryDrawer

const StyledRenderSideBar = styled(Box)`
   width: ${({ anchor }) =>
      anchor === 'top' || anchor === 'bottom' ? 'auto' : '240px'};
`

const StyledBox = styled.div`
   display: block;
`





