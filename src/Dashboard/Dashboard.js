import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import Stats from './Stats'

class Dashboard extends Component {
  render() {
    return (
      <Grid item xs={12}>
        <Paper>
          <h1>Dashboard</h1>
        </Paper>
        <br/>
        <Stats/>
      </Grid>
    )
  }
}

export default Dashboard;