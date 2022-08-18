import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import styled from 'styled-components'
import media from '../../utils/helpers/media'


export default function AdminCategoriesCard({img,title,description,id,onOpenCategory,category,onDelete,onEdit}) {
  return (
    <StyledCard sx={{ maxWidth: 345 , height:400,boxSizing:'border-box',display:'flex',flexDirection:"column",justifyContent:"space-between"}}>
      <CardActionArea>
        <StyledMediaCard
          onClick={() => onOpenCategory(category)}
          image={img}
        />
        <CardContent>
          <StyledTopography textAlign="center" onClick={() => onOpenCategory(id)} gutterBottom variant="h5" component="div">
            {title}
          </StyledTopography>
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
    </StyledCard>
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
  ${
    media.mobile`
      width: 80%;
      height: 200px;
    `
  }
`
const StyledCard = styled(Card)`
    box-shadow: 0 1px 2px rgba(0,0,0,0.15);
    transition: box-shadow 0.3s ease-in-out;
  &:hover{
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
  }

  ${
    media.mobile`
      width:300px;
    `
  }
`

const StyledTopography = styled(Typography)`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    cursor: pointer;
    background-color: orange;
`
