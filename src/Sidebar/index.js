import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import FaDaschbord from 'react-icons/lib/fa/dashboard';
import FaUser from 'react-icons/lib/fa/user';
import FaList from 'react-icons/lib/fa/list';
import FaPlusCircle from 'react-icons/lib/fa/plus-circle';
import Divider from 'material-ui/Divider';

import LogoYawnKiller from './LogoYawnKiller';
import LogoRedCoders from './LogoRedCoders';
import {toggleSidebar, showSignInModal, showAddAttraction} from './../UI/logic';
import './style.css';

const styles = {
  divider: {
    backgroundColor: 'rgb(78, 78, 78)'
  },
  redcodersLink: {
    position: 'absolute',
    bottom: '0'
  }
};

const mapStateToProps = state => ({
  open: state.ui.sidebar.open,
});

const mapDispatchToProps = dispatch => ({
  toggleSidebar: () => dispatch(toggleSidebar()),
  openSignInDialog: () => dispatch(showSignInModal()),
  showAddAttraction: () => dispatch(showAddAttraction())
});


const Sidebar = (props) => (
  <Drawer className="sidebar" open={props.open} onClose={props.toggleSidebar}>
    <Link to="/" onClick={props.toggleSidebar}>
      <LogoYawnKiller/>
    </Link>
    <div
      tabIndex={0}
      role="button"
      onClick={props.toggleSidebar}
      onKeyDown={props.toggleSidebar}
    >
      <List>
        <Link to="/">
          <ListItem button>
            <ListItemIcon>
              <FaDaschbord/>
            </ListItemIcon>
            <ListItemText primary="Dashboard"/>
          </ListItem>
        </Link>
        <Divider style={styles.divider} />
          <ListItem 
            button
            onClick={props.openSignInDialog}>
            <ListItemIcon>
              <FaUser/>
            </ListItemIcon>
            <ListItemText primary="Sign in"/>
          </ListItem>
        <Divider style={styles.divider} />
        <Link to="/attractions-list">
          <ListItem button>
            <ListItemIcon>
              <FaList/>
            </ListItemIcon>
            <ListItemText primary="List of attractions"/>
          </ListItem>
        </Link>
        <Divider style={styles.divider} />        
          <ListItem
            button
            onClick={props.showAddAttraction}>
            <ListItemIcon>
              <FaPlusCircle/>
            </ListItemIcon>
            <ListItemText primary="Add attraction"/>
          </ListItem>       
      </List>
    </div>
    <Link to="https://github.com/infoshareacademy/jfdzl1-red-coders-www" style={styles.redcodersLink} onClick={props.toggleSidebar} target="_blank">
      <LogoRedCoders/>
    </Link>
  </Drawer>
);

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Sidebar);
