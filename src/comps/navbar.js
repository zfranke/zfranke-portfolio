import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';

const pages = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

const Logo = styled(Typography)({
  flexGrow: 1,
  fontWeight: 'bold',
  fontSize: '1.2rem',
  cursor: 'pointer',
});

const NavbarButton = styled(Button)({
  fontSize: '1rem',
  fontWeight: 'bold',
  '&:hover': {
    background: 'rgba(0,0,0,0.2)',
    borderRadius: '5px',
    color: '#F2F2D5',
    transform: 'scale(1.05)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
  },
});

const LinkButton = styled(Link)({
  textDecoration: 'none',
  color: '#F2F2D5',
});


function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#1A1D1E' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <NavbarButton href="/" >
                <Logo variant="h5" component="div" color="#55FDB6">
                Zach Franke
                </Logo>
            </NavbarButton>
            <Box sx={{ display: 'flex' }}>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ display: { xs: 'block', md: 'none' } }}
                onClick={handleClick}
                >
                <MenuIcon />
                </IconButton>
                <Box
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    alignItems: 'center',
                }}
                >
                <NavbarButton href="/about" sx={{ color: '#55FDB6' }}>
                    About
                </NavbarButton>
                <NavbarButton href="/projects" sx={{ color: '#D5BD8A' }}>
                    Projects
                </NavbarButton>
                <NavbarButton href="/contact" sx={{ color: '#1DE1FF' }}>
                    Contact
                </NavbarButton>
                </Box>
            </Box>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                
            >
                {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleClose}><LinkButton to={page.href}>{page.name}</LinkButton></MenuItem>
                ))}
            </Menu>
            </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
