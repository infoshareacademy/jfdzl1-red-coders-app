import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import theme from './theme';
import Header from "./Reader";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

class App extends Component {
  render() {
    const {classes} = this.props;
    return (
      <Router>
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={12}>
              <Grid container className={classes.items}>
                <Header/>
                <Sidebar/>
                <Route exact path="/" component={Dashboard}/>
                <Route exact path="/main" component={null}/>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(theme)(App);

