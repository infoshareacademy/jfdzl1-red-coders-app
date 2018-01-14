import React, {Component} from 'react';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import Stats from '../Stats'
import { showNotification } from '../UI/logic';

const mapDispatchToProps = dispatch => {
  return {
    showSnackbar: (message) => dispatch(showNotification('Hello iSA :)'))
  }
}

class Dashboard extends Component {
  render() {
    return (
      <Grid item xs={12}>
        <Paper>
          <h1>Dashboard</h1>
          <div>
            <button onClick={this.props.showSnackbar}>CLICK ME!</button>
          </div>
        </Paper>
        <br/>
        <Stats/>
      </Grid>
    )
  }
}

export default connect(null, mapDispatchToProps)(Dashboard);
