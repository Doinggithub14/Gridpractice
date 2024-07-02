import React from 'react'
import './App.css';
import {Grid} from '@mui/material';
import MediaCard from './components/CustomButton/Card'
//import ButtonUsage from './components/CustomButton/ButtonUsage';
function App(){
return(<div className="blank">
  <Grid container spacing={3}>
    
    <Grid alignItems={"center"} item xs={12} sm={4} md={3} sx={{height:"250px", backgroundColor:"powderblue"}}>
        <MediaCard title="here we go" pic="https://i.pinimg.com/564x/d8/60/d5/d860d584fc94c31814ca74d5f52d0526.jpg" about="yes!"/>
         
    </Grid>

    <Grid item xs={12} sm={4} md={3} sx={{height:"250px", backgroundColor:"yellow"}}>
      <MediaCard title="here we go" pic="https://i.pinimg.com/564x/d8/60/d5/d860d584fc94c31814ca74d5f52d0526.jpg" about="yes!"/>
       
    </Grid>

    <Grid item xs={12} sm={4} md={3} sx={{height:"250px", backgroundColor:"pink"}}>
      <MediaCard title="here we go" pic="https://i.pinimg.com/564x/d8/60/d5/d860d584fc94c31814ca74d5f52d0526.jpg" about="yes!"/>
       
    </Grid>

    <Grid item xs={12} sm={4} md={3} sx={{height:"250px", backgroundColor:"powderblue"}}>
      <MediaCard title="here we go" pic="https://i.pinimg.com/564x/d8/60/d5/d860d584fc94c31814ca74d5f52d0526.jpg" about="yes!"/>
       
    </Grid>

  </Grid></div>
);
}

export default App;