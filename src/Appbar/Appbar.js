import React from 'react';
import {connect} from 'react-redux';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router-dom';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import LogoYawnKillerWhite from './LogoYawnKillerWhite';
import {toggleSidebar} from '../UI/logic';

const styles = {
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  headerColor: {
    backgroundColor: '#e32f33'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  loginButton: {
    color: '#ffffff'
  }
};

const mapDispatchToProps = dispatch => ({
  toggleSidebar: () => dispatch(toggleSidebar())
});

const Appbar = (props) => (
  <div style={styles.root}>
    <AppBar position="static" style={styles.headerColor}>
      <Toolbar>
        <IconButton style={styles.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon onClick={props.toggleSidebar}/>
        </IconButton>
        <Typography type="title" color="inherit" style={styles.flex}>
        <Link to="/">
          <LogoYawnKillerWhite/>
        </Link>
        </Typography>
        <Link to="/sign-in">
          <Button style={styles.loginButton} >Login</Button>
        </Link>
      </Toolbar>
    </AppBar>
  </div>
);

export default connect(null, mapDispatchToProps)(Appbar);
