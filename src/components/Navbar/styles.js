import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    minHeight: '10vh',
    flexGrow: 1,
  },
  navbar: {
    // background: 'none', // to remove default appbar styling
    // boxShadow: 'none',
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
  link: {
    marginLeft: theme.spacing(3),
    fontSize: '1.2rem',
    cursor: 'pointer',
  },

  // Drawer
  drawer: {
    width: window.innerWidth,
  },
  closeIcon: {
    marginTop: theme.spacing(1),
  },
  listItem: {
    fontSize: '1.8rem',
  },
}));
