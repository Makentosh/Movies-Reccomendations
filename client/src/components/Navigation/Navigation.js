import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Settings } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const Navigation = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const list = () => (
    <Box sx={ { width: 250 } }
         role="presentation"
         onClick={ toggleDrawer }
         onKeyDown={ toggleDrawer }>
      <List>
        <ListItem button
                  to={ '/settings' }
                  component={ Link }>
          <ListItemIcon>
            <Settings/>
          </ListItemIcon>
          <ListItemText primary={ 'Settings' }/>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Hidden only={ ['xl', 'lg'] }>
            <IconButton size="large"
                        onClick={ toggleDrawer }
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={ { mr: 2 } }>
              <MenuIcon/>
            </IconButton>
          </Hidden>

          <Typography variant="h6"
                      to={'/'}
                      component={ Link }
                      sx={ { textDecoration: 'none', color: 'inherit' } }>
            Movies recommendation
          </Typography>


          <Box sx={ { display: { xs: 'none', lg: 'flex' }, ml: 'auto' } }>
            <Link to="/settings">
              <Button sx={ { my: 2, color: 'white', display: 'block' } }>
                Settings
              </Button>
            </Link>
          </Box>

        </Toolbar>
      </AppBar>

      <Drawer anchor={ 'left' }
              open={ open }
              onClose={ toggleDrawer }>
        { list() }
      </Drawer>
    </Box>
  );
};

export default Navigation;
