import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from 'styled-components'
import Rating from '@mui/material/Rating';

export default function ShoppCard({onAddMaterial,material,onRemoveMaterial,onOpenCard}) {
  return (
    <StyledCard sx={{ maxWidth: 345,marginBottom:4,height:450,display:'flex',flexDirection:'column',justifyContent:"space-between" }}>
      <CardActionArea onClick={() => onOpenCard(material)}>
        <StyledCardMedia
          image={material?.image}
        />
        <CardContent sx={{textAlign:'center'}}>
          <StyledTopography sx={{padding:'0px',margin:'0px'}}  variant="h5">
            {material?.model}
          </StyledTopography>
          <p>
          {material?.manufacturer}
          </p>
        </CardContent>
      </CardActionArea>
      <StyledActions>
           <Rating sx={{margin:'0px',padding:'0px'}} name="read-only" value={4} readOnly /> 
            <StyledCounterWrapper>
            <h3 style={{margin:'0px'}}>{material?.price}Руб</h3>
              <StyledCounter>
               <RemoveIcon cursor="pointer" onClick={() => onRemoveMaterial(material)} />
                   <h3>{material?.count}</h3>
                <AddIcon cursor="pointer"   onClick={() => onAddMaterial(material)}/>
              </StyledCounter>
            </StyledCounterWrapper>
            
      </StyledActions>
    </StyledCard>
  );
}


const StyledCounterWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:100%;
  margin:0 auto;
  padding: 10px;
`

const StyledActions = styled(CardActions)`
  box-sizing: border-box;
  height: 30%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  align-items: baseline;
`

const StyledCounter = styled.div`
  box-sizing: borderbox;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const StyledCardMedia = styled.div`
   width: 60%;
   height: 200px;
   background-image:${({image}) => `url(${image})`};
   background-size: contain;
   background-repeat: no-repeat;
   margin: 0 auto;
`

const StyledTopography = styled(Typography)`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    cursor: pointer;
`

const StyledCard = styled(Card)`
    box-shadow: 0 1px 2px rgba(0,0,0,0.15);
    transition: box-shadow 0.3s ease-in-out;
  &:hover{
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
  }
`