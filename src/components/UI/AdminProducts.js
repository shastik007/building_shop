import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import styled from 'styled-components'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function AdminShoppCard({material,onDelete,onEdit}) {
  return (
    <Card sx={{ maxWidth: 345,marginBottom:4,display:'flex',flexDirection:'column',justifyContent:'space-between' }}>
      <CardActionArea>
        <StyledMediaCard
          image={material?.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {material?.model} {material?.manufacturer}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {material?.about}
          </Typography>
        </CardContent>
      </CardActionArea>
      <StyledActions>
            <StyledCounterWrapper>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={onEdit}
            >
                <EditIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={onDelete}
            >
                < DeleteIcon />
            </IconButton>
            </StyledCounterWrapper>
      </StyledActions>
    </Card>
  );
}


const StyledCounterWrapper = styled.div`
  display: flex;
`

const StyledActions = styled(CardActions)`
  width:100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
`

const StyledMediaCard = styled.div`
  width: 70%;
  height: 200px;
  margin: 0 auto;
  background-image: ${({image}) => `url(${image})`};
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: 10px;
`