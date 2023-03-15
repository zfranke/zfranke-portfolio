import { Box, Link, Typography } from '@mui/material';
function Footer() {
  return (
    <Box sx={{ backgroundColor: '#1A1D1E', color: '#F2F2D5', py: 2 }}>
      <Typography variant="body1" align="center">
        Made by Zach Franke 2023
      </Typography>
      <Typography variant="body2" align="center" sx={{color:"#F2F2D5"}}>
        Built with <Link href="https://reactjs.org/" color="#1DE1FF">React</Link> and <Link href="https://mui.com/" color="#1DE1FF">Material-UI</Link>
      </Typography>
    </Box>
  );
}
export default Footer;