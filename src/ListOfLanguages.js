import React from 'react'
import Header from './Header'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Footer from './Footer'
import { styled } from '@mui/material/styles';
import MediaQuery from 'react-responsive'
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
export default function ListOfLanguages () {

    return (
        <div>
          <Header/>
        <div>
        <MediaQuery minWidth={400} maxWidth={767}>
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: "50%",
          height: 500,  
          marginLeft:"25%"
        },
      }}
    >
      
      
      <Paper elevation={8} >

      {/* <ul style={{marginTop:"5%"}}>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
        </ul> */}
        {/* <div style={{ display: 'flex'}}>
                <h5 style={{ color: 'red', float:"left" }}>No Bullet</h5>
               
                <h5 style={{ color: 'red', float:"right" }}>List-Decimal</h5>
               
            </div> */}
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{fontWeight:"bolder", padding:"4%"}} >
        <Grid item xs={12} style={{padding:"2%"}} >
        <li> C Language </li>
        </Grid>
        <Grid item  xs={12} style={{padding:"2%"}} >
        <li> Python </li>
        </Grid>
       
        <Grid item xs={12} style={{padding:"2%"}}>
        <li>React JS</li> 
        </Grid>
        <Grid item  xs={12} style={{padding:"2%"}} >
        <li>Node JS</li> 
        
        </Grid>

        <Grid item xs={12} style={{padding:"2%"}}>
         <li> MongoDB/Database </li>
        </Grid>
        <Grid item  xs={12} style={{padding:"2%"}} >
        <li>MySQL/Database </li>
        </Grid>

        <Grid item xs={12} style={{padding:"2%"}} >
        <li>  Express</li>
        </Grid>
        <Grid item  xs={12} style={{padding:"2%"}} >
        <li>AWS Cloud</li>
        </Grid>

        <Grid item xs={12} style={{padding:"2%"}} >
        <li> Website Applications </li>
        </Grid>
        <Grid item xs={12} style={{padding:"2%"}} >
        <li> Desktop Applications </li>
        </Grid>
        <Grid item  xs={12} style={{padding:"2%"}} >
        <li> Firebase</li>
        </Grid>

        <Grid item xs={12} style={{padding:"2%"}}>
        <li> Heroku</li>
        </Grid>
        <Grid item  xs={12} style={{padding:"2%"}} >
        <li> DevOps</li>
        </Grid>
      </Grid>

      </Paper>
    </Box>
    </MediaQuery>
    <MediaQuery minWidth={767}>
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: "50%",
          height: 500,  
          marginLeft:"25%"
        },
      }}
    >
      
      
      <Paper elevation={8} >

      {/* <ul style={{marginTop:"5%"}}>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
        </ul> */}
        {/* <div style={{ display: 'flex'}}>
                <h5 style={{ color: 'red', float:"left" }}>No Bullet</h5>
               
                <h5 style={{ color: 'red', float:"right" }}>List-Decimal</h5>
               
            </div> */}
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{fontWeight:"bolder", padding:"4%"}} >
        <Grid item xs={6} style={{padding:"2%"}} >
        <li> C Language </li>
        </Grid>
        <Grid item  xs={6} style={{padding:"2%"}} >
        <li> Python </li>
        </Grid>
       
        <Grid item xs={6} >
        <li>React JS</li> 
        </Grid>
        <Grid item  xs={6} style={{padding:"2%"}} >
        <li>Node JS</li> 
        
        </Grid>

        <Grid item xs={6} >
         <li> MongoDB/Database </li>
        </Grid>
        <Grid item  xs={6} style={{padding:"2%"}} >
        <li>MySQL/Database </li>
        </Grid>

        <Grid item xs={6} >
        <li>  Express</li>
        </Grid>
        <Grid item  xs={6} style={{padding:"2%"}} >
        <li>AWS Cloud</li>
        </Grid>

        <Grid item xs={6} >
        <li> Website & Desktop Applications </li>
        </Grid>
        <Grid item  xs={6} style={{padding:"2%"}} >
        <li> Firebase</li>
        </Grid>

        <Grid item xs={6} >
        <li> Heroku</li>
        </Grid>
        <Grid item  xs={6} style={{padding:"2%"}} >
        <li> DevOps</li>
        </Grid>
      </Grid>

      </Paper>
    </Box>
    </MediaQuery>
        </div>
          <Footer/>
        </div>
    )
}
