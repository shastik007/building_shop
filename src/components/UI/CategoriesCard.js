import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CategoriesCard({img,title,description,id,onOpenCategory}) {
  return (
    <Card sx={{ maxWidth: 345 , height:330}}>
      <CardActionArea>
        <CardMedia
          onClick={() => onOpenCategory(id)}
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography onClick={() => onOpenCategory(id)} gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography onClick={() => onOpenCategory(id)} variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}