import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


export default function IncrementAndDecrementButton({type = 'inc'}) {
  return ( 
      <IconButton color="primary" component="label">
       {
           type === 'inc' ? <AddIcon/> : <RemoveIcon/>
       }
      </IconButton>
  );
}