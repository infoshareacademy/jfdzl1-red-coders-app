import React from 'react';
import {connect} from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import {toggleSidebar} from '../UI/logic';

const styles = {
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const mapDispatchToProps = dispatch => ({
  toggleSidebar: () => dispatch(toggleSidebar())
});

const Appbar = (props) => (
  <div style={styles.root}>
    <AppBar position="static">
      <Toolbar>
        <IconButton style={styles.menuButton} color="contrast" aria-label="Menu">
          <MenuIcon onClick={props.toggleSidebar}/>
        </IconButton>
        <Typography type="title" color="inherit" style={styles.flex}>
          Yawn app
        </Typography>
        <Button color="contrast">Login</Button>
      </Toolbar>
    </AppBar>
  </div>
);

export default connect(null, mapDispatchToProps)(Appbar);
