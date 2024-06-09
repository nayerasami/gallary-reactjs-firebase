import React from 'react'
import  Container  from '@mui/material/Container'
import LoginForm from '../components/LoginForm'


const Signin = () => {
  return (
 <>
 <Container sx={{marginTop:'32px'}}>
    <LoginForm></LoginForm>
 </Container>
 </>  )
}

export default Signin