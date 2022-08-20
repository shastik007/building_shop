import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import SearchedInput from '../../components/UI/SearchedInput';
import styled from 'styled-components'
import { useSelector , useDispatch } from 'react-redux';
import { searchProduct } from '../../store/productSlice';
import SinglePorductModal from '../../components/user/SinglePorductModal';


export default function SearchInput() {
    const [model,setModel] = React.useState('')
    const {searchProducts} = useSelector(store => store.products)
    const dispatch = useDispatch()
    const [product,setProduct] = React.useState(null)
    const changeHandler = (e) => {
        setModel(e.target.value)
        
            dispatch(searchProduct({
                model:e.target.value
            }))
    }

    const openProductModal = (product) => {
        setProduct(product)
    }

    const closeModal = () => setProduct(null)
  return (
    <div>
      <Paper
      component="form"
    >
      <InputBase
        value={model}
        onChange={changeHandler}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Поиск по сайту"
        inputProps={{ 'aria-label': 'search google maps' }}
        size="small"
      />
      <IconButton type="button" aria-label="search">
        <SearchIcon />
      </IconButton>
     </Paper>
     <StyledFindedWrapper>

        {model && searchProducts.map((el) => {
            return <SearchedInput onCardClick={() => openProductModal(el)} title={el.model}/>
        })}
     </StyledFindedWrapper>
     <SinglePorductModal isOpen={Boolean(product)} modalData={product} onClose={closeModal}/>
    </div>
  );
}


const StyledFindedWrapper = styled.div`
  position:fixed;
  background-color: white;
  width: 230px;
  border-radius:0 0 5px 5px ;
  max-height: 400px;
  overflow-y: scroll;
`