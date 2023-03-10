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
  { name: 'Skills', href: '/skills' },
  { name: 'Contact', href: '/contact' },
];

const Logo = styled(Typography)({
  flexGrow: 1,
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '1.2rem',
  cursor: 'pointer',
});

const NavbarButton = styled(Button)({
  color: '#fff',
  fontSize: '1rem',
  fontWeight: 'bold',
  '&:hover': {
    background: 'rgba(0,0,0,0.2)',
  },
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
      <AppBar position="static" sx={{ backgroundColor: '#232323' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <NavbarButton href="/" >
                <Logo variant="h5" component="div">
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
                <NavbarButton href="/about" sx={{ color: '#044a1e' }}>
                    About
                </NavbarButton>
                <NavbarButton href="/projects" sx={{ color: '#044a1e' }}>
                    Projects
                </NavbarButton>
                <NavbarButton href="/skills" color="inherit">
                    Skills
                </NavbarButton>
                <NavbarButton href="/contact" color="inherit">
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
                <MenuItem key={page.name} href={page.href} onClick={handleClose}>
                    {page.name}
                </MenuItem>
                ))}
            </Menu>
            </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
