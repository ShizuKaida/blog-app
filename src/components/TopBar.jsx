import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ProjectIcon from '@mui/icons-material/Build';
import ContactIcon from '@mui/icons-material/ContactMail';
import LoginIcon from '@mui/icons-material/Login';
import RegisterIcon from '@mui/icons-material/AppRegistration';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const TopBar = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if user is logged in
  const [snackbarOpen, setSnackbarOpen] = useState(false); // State to control Snackbar open/close
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isBelow950 = useMediaQuery('(max-width:950px)');

  useEffect(() => {
    // Check if token exists in localStorage to determine login status
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Update isLoggedIn state based on token presence
  }, []);

  const handleDrawerToggle = () => {
    setDrawerOpen((prevOpen) => !prevOpen); // Toggle drawer state
  };

  const handleLogout = () => {
    // Clear token from localStorage and update login status
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setSnackbarOpen(true); // Open Snackbar on logout
    setTimeout(() => {
      setSnackbarOpen(false); // Close Snackbar after some time
      navigate('/'); // Redirect to homepage after logout
    }, 3000); // Snackbar duration
  };

  const menuItems = [
    { text: 'Anasayfa', path: '/', icon: <HomeIcon /> },
    { text: 'Hakkımızda', path: '/about', icon: <InfoIcon /> },
    { text: 'Projelerimiz', path: '/projelerimiz', icon: <ProjectIcon /> },
    { text: 'İletişim', path: '/contact', icon: <ContactIcon /> },
    ...(isLoggedIn
      ? [{ text: 'Çıkış Yap', path: '/', icon: <ExitToAppIcon />, onClick: handleLogout }]
      : [
          { text: 'Giriş Yap', path: '/login', icon: <LoginIcon /> },
          { text: 'Kayıt Ol', path: '/register', icon: <RegisterIcon /> },
        ]),
  ];

  const drawer = (
    <Drawer
      anchor="left"
      open={drawerOpen}
      onClose={handleDrawerToggle}
      sx={{ '& .MuiDrawer-paper': { backgroundColor: '#3f51b5', color: '#fff' } }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text} onClick={() => { navigate(item.path); setDrawerOpen(false); }}>
            <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              color: '#fff',
              cursor: 'pointer',
              '&:hover': {},
            }}
            onClick={() => navigate('/')}
          >
            Albayrak Software
          </Typography>
          {isMobile || isBelow950 ? (
            <>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
              {drawer}
            </>
          ) : (
            <>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  color="inherit"
                  onClick={item.onClick ? item.onClick : () => navigate(item.path)}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                    marginLeft: 1,
                  }}
                  startIcon={item.icon}
                >
                  {item.text}
                </Button>
              ))}
            </>
          )}
        </Toolbar>
      </AppBar>
      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <MuiAlert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Başarıyla çıkış yaptınız.
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default TopBar;
