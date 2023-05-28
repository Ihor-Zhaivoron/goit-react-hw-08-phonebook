import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logout from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Divider from '@mui/material/Divider';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const name = useSelector(state => state.auth.user.name);
  const email = useSelector(state => state.auth.user.email);
  const dispatch = useDispatch();

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenUserMenu = e => {
    setAnchorElUser(e.currentTarget);
  };
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="User menu">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt={name} src={`https://i.pravatar.cc/150?u=${name}`} />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <Typography variant="body1" className={css.menuItem}>
            <ListItemIcon sx={{ minWidth: '36px' }}>
              <AccountCircleIcon fontSize="small" />
            </ListItemIcon>
            {name}
          </Typography>
          <Typography variant="body1" sx={{ pb: 2 }} className={css.menuItem}>
            <ListItemIcon sx={{ minWidth: '36px' }}>
              <AlternateEmailIcon fontSize="small" />
            </ListItemIcon>
            {email}
          </Typography>
          <Divider />
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
};
