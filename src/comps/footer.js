import { Box, Link, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#232323', color: '#fff', py: 2 }}>
      <Typography variant="body1" align="center">
        Made by Zach Franke 2023
      </Typography>
      <Typography variant="body2" align="center">
        Built with <Link href="https://reactjs.org/" color="inherit">React</Link> and <Link href="https://mui.com/" color="inherit">Material-UI</Link>
      </Typography>
    </Box>
  );
}

export default Footer;