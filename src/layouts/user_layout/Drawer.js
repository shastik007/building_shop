import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { fake_categories } from '../../data/fake_data';
import LoginModal from '../../containers/LoginModal';
import Button from '../../components/UI/Button';
import { useSelector } from 'react-redux';

const TemporaryDrawer = () => {
   const [isOpenModal,setIsOpenModal] = React.useState(false)
   const {products} = useSelector(store => store.products)
   console.log(products);
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
            {products.map((categories) => {
               return <StyledLink to={`/${categories.id}`}>{categories.nameCategory}</StyledLink>
            })}
            <StyledNavBar>
          <StyledLink to="/">Главная</StyledLink>
            <StyledLink to="/delivery">Доставка</StyledLink>
            <StyledLink to="/payment">Cпособ оплаты</StyledLink>
          </StyledNavBar>
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
 display: block;
 color: black;
 font-size: 16px;
 margin-bottom: 5px;
 text-decoration: none;
 font-family: Verdana, Geneva, Tahoma, sans-serif;
 font-weight: 400;
 background-color: orange;
 width: 13rem;
 height: 50px;
 display: flex;
 align-items: center;
 border-radius: 0 5px 5px 0;
 padding-left: 10px;
 box-shadow: 0 1px 2px rgba(0,0,0,0.15);
    transition: box-shadow 0.3s ease-in-out;
  &:hover{
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
  }

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
const StyledNavBar = styled('div')`
  width: 50%;
  display: flex;
  flex-direction: column;

`







