import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

const NotFound = () => {
  return (
    
      <Container component="main" maxWidth="md" sx={{ mt: 8, mb: 4 }}>
          <Box
              sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '70vh',
                  textAlign: 'center',
              }}
          >
              <Typography variant="h1" component="h1" sx={{ color: '#521ce4',fontWeight:'bolder' }}>
                  404
              </Typography>
              <Typography variant="h4" component="h2" sx={{ color: '#c677e8', mt: 2 }}>
                  Page Not Found
              </Typography>
              <Typography variant="body1" sx={{ color: '#521ce4', mt: 2 }}>
                  The page you're looking for doesn't exist.
              </Typography>
              <Button
                  variant="contained"
                  href="/"
                  sx={{ mt: 4, borderRadius: '15px', px: '20px', py: '10px', background: 'linear-gradient(to right, #521ce4, #c677e8)' }}
              >
                  Go to Home
              </Button>
          </Box>
      </Container>
  )
}

export default NotFound