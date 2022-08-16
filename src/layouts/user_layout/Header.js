import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import TemporaryDrawer from './Drawer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import media from '../../utils/helpers/media';
import OrderModal from '../../components/user/OrderModal';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';





export default function Header() {
 const [isOpenModal,setIsOpenModal] = React.useState(false)
 const { order } = useSelector(store => store.order)

 const toggleModal = () => {
   setIsOpenModal(prev => !prev)
 }
  return (
    <Box sx={{ flexGrow: 1,marginBottom:2,backgroundColor:'orange' }}>
      <AppBar sx={{backgroundColor:'orange'}} position="fixed">
        <Toolbar>
          <TemporaryDrawer />
          
          <Box sx={{ flexGrow: 1 }}/>
          <Box>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={toggleModal}
            >
              <Badge badgeContent={order.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <OrderModal onClose={toggleModal} isOpen={isOpenModal}/>
    </Box>
  );
}




