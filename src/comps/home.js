import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function HomePage() {
  return (
    <>
    <Box
      sx={{
        backgroundColor: '#1F1F1F',
        color: '#fff',
        minHeight: '87vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '@media (max-width:600px)': {
          padding: '1.5rem',
        },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: '4rem',
          fontFamily: [
            'antique-olive',
          ],
          fontWeight: 500,
          color: '#02ab64',
          marginBottom: '1.5rem',
          '@media (max-width:600px)': {
            fontSize: '2.5rem',
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
          fontFamily: [
            'antique-olive',
          ],
          color: '#D6BF8D',
          fontWeight: 450,
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
          fontFamily: [
            'antique-olive',
          ],
          fontWeight: 400,
          color: '#05deff',
          '@media (max-width:600px)': {
            fontSize: '1.25rem',
          },
        }}
      >
        I am passionate about building and deploying scalable, secure, and reliable infrastructure and software systems.
      </Typography>
    </Box>

    </>
  );
}

export default HomePage;
