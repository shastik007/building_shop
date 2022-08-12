import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { fake_categories } from '../../data/fake_data';
import LoginModal from '../../containers/LoginModal';
import Button from '../../components/UI/Button';


const TemporaryDrawer = () => {
   const [isOpenModal,setIsOpenModal] = React.useState(false)

   const toggleModal = () => setIsOpenModal(prev => !prev)
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

   const toggleModalll = () => {
      toggleModal()
      toggleDrawer('left', false)
   }

   const renderSideBarList = (anchor) => (
      <StyledRenderSideBar anchor={anchor} role="presentation">
         <StyledList>
            {fake_categories.map((categories) => {
               return <StyledLink to={categories.category}>{categories.title}</StyledLink>
            })}
            <ButtonWrapper>
            <Button onClick={toggleModalll}>Войти</Button>
            </ButtonWrapper>
         </StyledList>
         <LoginModal onClose={toggleModal}
       isOpen={isOpenModal}/>
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
      anchor === 'top' || anchor === 'bottom' ? 'auto' : '260px'};
`

const StyledBox = styled.div`
   display: block;
   margin-right: 10px;
`
const StyledLink = styled(Link)`
 color: black;
 font-size: 16px;
 margin-bottom: 20px;
 border-bottom: 1px solid black;
 text-decoration: none;
 font-family: Verdana, Geneva, Tahoma, sans-serif;
 font-weight: 400;
`

const StyledList = styled.ul`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  
`

const ButtonWrapper = styled.div`
  width: 60%;
  height: 40px;
`





