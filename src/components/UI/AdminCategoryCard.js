import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import styled from 'styled-components'


export default function AdminCategoriesCard({img,title,description,id,onOpenCategory,category,onDelete,onEdit}) {
  return (
    <Card sx={{ maxWidth: 345 , height:400}}>
      <CardActionArea>
        <CardMedia
          onClick={() => onOpenCategory(category)}
          component="img"
          height="200"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography textAlign="center" onClick={() => onOpenCategory(id)} gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography onClick={() => onOpenCategory(id)} variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <StyledButtonsWrapper>
          <IconButton onClick={onEdit}>
              <EditIcon/>
          </IconButton>
          <IconButton onClick={() => onDelete(id)}>
              <DeleteIcon/>
          </IconButton>
          </StyledButtonsWrapper>
      </CardActions> 
    </Card>
  );
}

const StyledButtonsWrapper = styled.div`
  justify-content: flex-end;
  gap: 10px;
`