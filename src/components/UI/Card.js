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

export default function ShoppCard({onAddMaterial,material,onRemoveMaterial}) {
  return (
    <Card sx={{ maxWidth: 345,marginBottom:4,height:650,display:'flex',flexDirection:'column',justifyContent:'space-between' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={material?.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {material?.model} {material?.manufacturer}
          </Typography>
          <StyledDescriptionWrapper variant="body2" color="text.secondary">
           {material?.about}
          </StyledDescriptionWrapper>
        </CardContent>
      </CardActionArea>
      <StyledActions>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
                <h5>{material?.price}Руб</h5>
            </IconButton>
            <StyledCounterWrapper>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={() => onRemoveMaterial(material)}
            >
                <RemoveIcon />
            </IconButton>
            <h3>{material?.count}</h3>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={() => onAddMaterial(material)}
            >
                <AddIcon />
            </IconButton>
            </StyledCounterWrapper>
      </StyledActions>
    </Card>
  );
}


const StyledCounterWrapper = styled.div`
  display: flex;
  margin:0 auto;
  
`

const StyledActions = styled(CardActions)`
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  align-items: baseline;
`

const StyledDescriptionWrapper = styled(Typography)`
  overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 10;
   -webkit-box-orient: vertical;
   cursor: pointer;
`