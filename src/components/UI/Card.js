import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';

export default function ShoppCard() {
  return (
    <Card sx={{ maxWidth: 345,marginBottom:4 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxRetOD-CHuxOMDVYFjdHEio-cJzEj4abxmpKrcJhc1QhpzUNlmYTQNnadvcDeH-Dy3Qs&usqp=CAU"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
                <ShoppingCartIcon />
            </IconButton>
      </CardActions>
    </Card>
  );
}