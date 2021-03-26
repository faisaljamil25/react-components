import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    minHeight: '10vh',
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'block',
  },
  brandImg: {
    marginRight: theme.spacing(2),
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  // Drawer
  drawer: {
    width: window.innerWidth,
  },
  closeIcon: {
    marginTop: theme.spacing(2),
  },
  list: {
    flexGrow: 0.8,
  },
  link: {
    position: 'relative',
    '&:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'none',
      background: 'none',
      border: 'none',
      outline: 'none',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      left: '50%',
      bottom: 0,
      width: 0,
      height: '2px',
      transform: 'translate(-50%, 0)',
      backgroundColor: '#ffffff',
      transition: 'all 0.2s ease',
    },
    '&:hover::after': {
      width: '80%',
    },
    // '&::after': {
    //   content: '',
    //   position: 'absolute',
    //   left: '50%',
    //   bottom: 0,
    //   width: '80%',
    //   height: '2px',
    //   backgroundColor: '#ffffff',
    // },
  },
}));
/*

.nav-link {
  position: relative;
}
.nav-link:hover {
  color: white !important;
}

.nav-link.active::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 80%;
  height: 2px;
  background-color: #ffffff;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0;
  height: 2px;
  transform: translate(-50%, 0);
  background-color: #ffffff;
  transition: all 0.2s ease;
}

.nav-link:hover::after {
  width: 80%;
}

*/
