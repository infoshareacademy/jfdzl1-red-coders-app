import React, {Component} from 'react';
import Grid from 'material-ui/Grid';

import Stats from './Stats'

class Dashboard extends Component {
  render() {
    return (
      <Grid item xs={12}>
        Dashboard
        <br/>
        <Stats/>
      </Grid>
    )
  }
}

export default Dashboard;