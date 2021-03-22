import React from 'react';
import {
  AppBar,
  Button,
  Typography,
  IconButton,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Grid,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { menuList } from './menuList';
import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();
  const [drawer, setDrawer] = React.useState(false);
  const handleDrawerOpen = () => {
    setDrawer(true);
  };
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawer(open);
  };
  const openDrawer = (
    <Drawer
      anchor='left'
      open={drawer}
      id='drawer'
      onClose={toggleDrawer(false)}
    >
      <div
        className={classes.drawer}
        role='presentation'
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <Grid container justify='space-between'>
          <Grid item xs={10}>
            <List>
              {menuList.map((item, index) => (
                <ListItem button key={index}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={2} className={classes.closeIcon}>
            <IconButton color='inherit'>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      </div>
    </Drawer>
  );
  return (
    <div className={classes.root}>
      <AppBar position='sticky'>
        <Toolbar>
          <img
            src='/assets/firefox.svg'
            width='60px'
            alt='fb'
            className={classes.brandImg}
          />
          <Typography className={classes.title} variant='h6' noWrap>
            Firefox
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {menuList.map((item, index) => (
              <Button color='inherit' key={index}>
                {item}
              </Button>
            ))}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label='open drawer'
              aria-controls='drawer'
              aria-haspopup='true'
              onClick={handleDrawerOpen}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {openDrawer}
    </div>
  );
};

export default Navbar;
