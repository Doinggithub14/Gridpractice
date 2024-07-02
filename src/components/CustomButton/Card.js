import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonUsage from './ButtonUsage';

export default function MediaCard(props) {
  return (<>
    <Card >{/*never give width*/}
      <CardMedia
        sx={{ height:140 }}
        image={props.pic}
        title="S"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.about}
          Kuhu
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonUsage/>
      </CardActions>
    </Card>

    {/*  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://i.pinimg.com/564x/d8/60/d5/d860d584fc94c31814ca74d5f52d0526.jpg"
        title="green iguana"
      /> 
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          KIBO
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://i.pinimg.com/564x/40/ac/51/40ac51221a981ba7b0e846e0f4b9c484.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Mickey
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card> */}

    
    </>
  );
}
