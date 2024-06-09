import React from 'react'
import Photos from '../components/Photos/Photos'
import  Typography  from '@mui/material/Typography'
import Container from '@mui/material/Container'


const Home = () => {
  return (
<>
<Container sx={{textAlign:'center',margin:'auto'}}>
<Typography variant='h2' sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              textDecoration: "none"}} >Inspiration</Typography>
<Typography gutterBottom sx={{textAlign:'center' ,margin:'auto',width:600}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ex expedita nemo non repellat facere consequatur ea? Iure, iusto commodi?</Typography>
</Container>

<Photos></Photos>

</>
  )
}

export default Home