import React, { useEffect, useState } from 'react';
import {
  Grid,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  Divider,
  Button,
  useMediaQuery,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { PAGE_NAVIGATION } from '@/config/config';
import { titleLinkStyle, navLinkStyle, mobileNavLinkStyle } from './headerStyle';

function DrawerList() {
  return (
    <Box sx={{ width: 'auto' }}>
      <List>
        {PAGE_NAVIGATION.map(({ name, link }) => (
          <div key={name}>
            <ListItem component={NavLink} to={link} sx={mobileNavLinkStyle.box}>
              <Typography noWrap sx={mobileNavLinkStyle.link}>
                {name}
              </Typography>
            </ListItem>
            <Divider component="div" role="presentation" />
          </div>
        ))}
      </List>
    </Box>
  );
}

function Header() {
  const theme = useTheme();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleNav = (state) => () => {
    setIsNavOpen(state);
  };

  useEffect(() => {
    if (!isMobile && isNavOpen) {
      setIsNavOpen(false);
    }
  }, [isMobile]);

  return (
    <AppBar position="static" sx={{ backgroundColor: '#ff8f49' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: isMobile && 'center', alignItems: 'center' }}>
          <Grid container>
            <Grid item xs={6} sm={4}>
              <Box sx={titleLinkStyle.box}>
                <Typography variant="h6" noWrap component={NavLink} to="/" sx={titleLinkStyle.text}>
                  手工花生糖
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={8}>
              <Box sx={navLinkStyle.box}>
                {isMobile ? (
                  <IconButton style={{ color: 'white' }} onClick={toggleNav(!isNavOpen)}>
                    <MenuIcon />
                  </IconButton>
                ) : (
                  PAGE_NAVIGATION.map(
                    ({ name, link }) => name !== '首頁' && (
                    <Button key={name} variant="p" component={NavLink} to={link} sx={navLinkStyle.link}>
                      {name}
                    </Button>
                    ),
                  )
                )}
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
        {isMobile && (
          <SwipeableDrawer
            PaperProps={{
              sx: { width: '100%' },
              onClick: toggleNav(false),
            }}
            transitionDuration={300}
            anchor="left"
            open={isNavOpen}
            onOpen={toggleNav(true)}
            onClose={toggleNav(false)}
          >
            <DrawerList />
          </SwipeableDrawer>
        )}
      </Container>
    </AppBar>
  );
}
export default Header;
