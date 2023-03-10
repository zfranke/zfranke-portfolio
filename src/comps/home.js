import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function HomePage() {
  return (
    <Box
      sx={{
        backgroundColor: '#1F1F1F',
        color: '#fff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        '@media (max-width:600px)': {
          padding: '1rem',
        },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: '4rem',
          fontWeight: 600,
          color: '#04702c',
          marginBottom: '2rem',
          '@media (max-width:600px)': {
            fontSize: '3rem',
            marginBottom: '1.5rem',
          },
        }}
      >
        Hello, I'm Zach Franke
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontSize: '2rem',
          color: '#D6BF8D',
          marginBottom: '1.5rem',
          '@media (max-width:600px)': {
            fontSize: '1.5rem',
            marginBottom: '1rem',
          },
        }}
      >
        Software Engineering Professional
      </Typography>
      <Typography
        variant="body"
        sx={{
          fontSize: '1.5rem',
          color: '#B1CAB0',
          marginBottom: '2rem',
          '@media (max-width:600px)': {
            fontSize: '1.25rem',
            marginBottom: '1.5rem',
          },
        }}
      >
        I am passionate about building and deploying scalable, secure, and reliable infrastructure and software systems.
      </Typography>
    </Box>
  );
}

export default HomePage;
