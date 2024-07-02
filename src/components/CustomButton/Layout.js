import { Grid } from '@mui/material';
import React from 'react';
//import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Layout = (props) => {
    return <div>
        <Grid container spacing={3}>
            <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.pic}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.aboutme}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">SELECT</Button>
        <Button size="small">ADD TO TRAY</Button>
      </CardActions>
    </Card>
            </Grid>

            <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://i.pinimg.com/564x/d8/60/d5/d860d584fc94c31814ca74d5f52d0526.jpg"
        title="kibo"
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
            </Grid>

            <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://i.pinimg.com/564x/40/ac/51/40ac51221a981ba7b0e846e0f4b9c484.jpg"
        title="PLUTO"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          PLUTO
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
            </Grid>

            <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://i.pinimg.com/564x/ba/0b/f1/ba0bf1af2574d936e74f39fe227a2e71.jpg"
        title="star wars"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          STAR WARS
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
            </Grid>


        </Grid>
    </div>;
};

export default Layout;