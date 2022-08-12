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



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.35),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '45ch',
    },
  },
}));

export default function Header() {
 const [isOpenModal,setIsOpenModal] = React.useState(false)
 const { order } = useSelector(store => store.order)

 const toggleModal = () => {
   setIsOpenModal(prev => !prev)
 }
  return (
    <Box sx={{ flexGrow: 1,marginBottom:2,backgroundColor:'orange' }}>
      <AppBar position="fixed">
        <Toolbar>
          <TemporaryDrawer />
              <Search>
            <SearchIconWrapper>
              <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        
          <Box sx={{ flexGrow: 1 }} />
          <StyledNavBar>
          <StyledLink to="/">Главная</StyledLink>
            <StyledLink to="/delivery">Доставка</StyledLink>
            <StyledLink to="/payment">Cпособ оплаты</StyledLink>
          </StyledNavBar>
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


const StyledNavBar = styled('div')`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`


const StyledLink = styled(Link)`
  font-size: 20px;
  color: white;
  text-decoration: none;
`


