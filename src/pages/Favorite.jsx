import React from 'react'
import Container  from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import FavoriteList from '../components/Favorites/FavoriteList'


const Favorite = () => {
  return (
<>
<Container sx={{textAlign:'center' }}>
<Typography variant='h2' sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              textDecoration: "none"}} >Favorites</Typography>
<Typography gutterBottom sx={{textAlign:'center' ,margin:'auto',width:600}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ex expedita nemo non repellat facere consequatur ea? Iure, iusto commodi?</Typography>
</Container>
<FavoriteList></FavoriteList>

</>
  )
}

export default Favorite