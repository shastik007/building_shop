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
    <Card sx={{ maxWidth: 345 , height:400,boxSizing:'border-box',display:'flex',flexDirection:"column",justifyContent:"space-between"}}>
      <CardActionArea>
        <StyledMediaCard
          onClick={() => onOpenCategory(category)}
          image={img}
        />
        <CardContent>
          <Typography textAlign="center" onClick={() => onOpenCategory(id)} gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <StyledCardActions>
          <StyledButtonsWrapper>
          <IconButton onClick={onEdit}>
              <EditIcon/>
          </IconButton>
          <IconButton onClick={() => onDelete(id)}>
              <DeleteIcon/>
          </IconButton>
          </StyledButtonsWrapper>
      </StyledCardActions> 
    </Card>
  );
}

const StyledButtonsWrapper = styled.div`
  justify-content: flex-end;
  gap: 10px;
`

const StyledCardActions = styled(CardActions)`
  width:100%;
  height: 50px;
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

