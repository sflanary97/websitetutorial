import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../App.css';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='relative'>
        <ToolBar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Website Tutorial
          </Typography>
          <Button color="inherit">Link</Button>
        </ToolBar>
      </AppBar>
    </div>
  );
}

export default Header;
