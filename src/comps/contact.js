import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';

const Contact = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#17191A',
        color: '#D8D4CF',
        minHeight: '89vh',
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
          fontFamily: ['antique-olive'],
          fontWeight: 500,
          color: '#55FDB6',
          marginBottom: '1.5rem',
          '@media (max-width:600px)': {
            fontSize: '2.5rem',
            marginBottom: '1.5rem',
          },
        }}
      >
        Contact
      </Typography>
      <Typography variant="body1" align="center" sx={{fontSize: '25px'}}>
        Get in touch with me
      </Typography>
      <br />
      <br />
      <Grid container spacing={2} sx={{ justifyContent: 'center', color: '#D8D4CF' }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              p: 2,
              color: '#D8D4CF',
              backgroundColor: '#EAE8E4',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
              borderRadius: '10px',
            }}
          >
            <Typography variant="body1" align="center" sx={{fontSize: '25px'}}>
              Email me at: <a href="mailto:zfranke@live.com">zfranke@live.com</a>
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <br />
      <br />
      <Typography variant="body1" align="center" sx={{fontSize: '25px'}}>
        Or find me on:
      </Typography>
      <br />
      <br />
      <Grid item xs={12} md={6}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            startIcon={<GitHub />}
            href="https://github.com/zfranke"
            sx={{ mr: 2 }}
          >
            GitHub
          </Button>
          <Button
            variant="contained"
            startIcon={<LinkedIn />}
            href="https://www.linkedin.com/in/zachary-franke-064211159/"
            sx={{ ml: 2 }}
          >
            LinkedIn
          </Button>
        </Box>
      </Grid>

    </Box>
  );
};
export default Contact;
