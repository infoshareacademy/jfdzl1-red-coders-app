import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';

import Stats from './Stats'
import {database} from '../firebase';


class Dashboard extends Component {

  state = {
    places: null
  }

  componentDidMount() {
    database.ref('/attractions')
      .once('value', (snapshot) => {
        this.setState({
          places: snapshot.val()
        });
      })
  }

  render() {
    return (
      <Grid item xs={12}>
        <Paper>
          <h1>Places</h1>
          {this.state.places && Object.entries(this.state.places).map(([key, place], index) => (
            <div key={key}>
              <p><Link to={`/place/${key}`}>{place.name}</Link></p>
              <p>Place description: {place.description}</p>
              <Divider />
            </div>
          ))}
        </Paper>
        <br/>
        <Stats/>
      </Grid>
    )
  }
}

export default Dashboard;