import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styled from 'styled-components'
import media from '../../utils/helpers/media';

export default function CategoriesCard({img,title,description,id,onOpenCategory,category}) {
  return (
    <StyledCard sx={{ maxWidth: 345 , height:300}}>
      <CardActionArea>
        <StyledCardMedia
          onClick={() => onOpenCategory(category)}
          image={img}
        />
        <CardContent>
          <StyledTypography textAlign="center" onClick={() => onOpenCategory(id)} gutterBottom variant="h5" component="div">
            {title}
          </StyledTypography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
}

const StyledCardMedia = styled.div`
  width: 70%;
  height: 200px;
  background-image: ${({image}) => `url(${image})`};
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0 auto;
  margin-top: 20px;
  ${
    media.mobile`
      width: 80%;
      height: 200px;
    `
  }
`

const StyledTypography = styled(Typography)`
  text-align: center;
  text-transform:lowercase;

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