import { useState } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const contacts = useSelector(state => state.contacts.contacts);
  const countOfContacts = contacts.length;

  const handleOpenNavMenu = e => {
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          <MenuItem onClick={handleCloseNavMenu}>
            <Link component={NavLink} to="/" textAlign="center">
              Contacts
            </Link>
          </MenuItem>

          <MenuItem onClick={handleCloseNavMenu}>
            <Link component={NavLink} to="/addcontact" textAlign="center">
              Add Contact
            </Link>
          </MenuItem>
        </Menu>
      </Box>

      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        <Badge color="secondary" badgeContent={countOfContacts}>
          <Button
            component={NavLink}
            to="/"
            onClick={handleCloseNavMenu}
            className={css.buttonMenu}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            Contacts
          </Button>
        </Badge>
        <Button
          component={NavLink}
          to="/addcontact"
          onClick={handleCloseNavMenu}
          className={css.buttonMenu}
          sx={{ my: 2, color: 'white', display: 'block', ml: '15px' }}
        >
          Add Contacts
        </Button>
      </Box>
    </>
  );
};
