import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Grid from 'material-ui/Grid';

class Header extends Component {
  render() {
    return (
      <Grid item xs={12}>
        <ul>
          <li><Link to="/"></Link></li>
          <li><Link to="/main"></Link></li>
        </ul>
      </Grid>
    )
  }
}

export default Header;
