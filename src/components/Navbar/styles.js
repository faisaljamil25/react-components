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
}));
