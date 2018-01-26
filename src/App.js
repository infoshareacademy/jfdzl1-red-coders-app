import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import {Link} from 'react-router-dom';

import theme from './theme';
import Appbar from './Appbar';
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import AccountForm from "./AccountForm";
import {auth, storageKey} from './firebase';
import AttractionsList from './AttractionsList/AttractionsList';
import Notifications from './UI/Notifications';
import {store, history} from './store';
import AddAttr from "./AddAttr/AddAttr";
import Attraction from "./Attraction/Attraction";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      uid: null
    };
  }

  componentWillMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        window.localStorage.setItem(storageKey, user.uid);
        this.setState({uid: user.uid});
      } else {
        window.localStorage.removeItem(storageKey);
        this.setState({uid: null});
      }
    })
  }

  render() {
    const {classes} = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <div className={classes.root}>
              <Grid
                container className={classes.items}
                alignContent='center'
                justify='center'
              >
                <Appbar/>

                <Grid
                >
                  <Route exact path="/" component={Dashboard}/>
                  <Route path="/add-attraction" component={AddAttr}/>
                  <Route path="/sign-in" component={AccountForm}/>
                  <Route path="/attractions-list" component={AttractionsList}/>
                  <Route path="/attraction/:attractionId" component={Attraction}/>
                </Grid>
              </Grid>
            </div>
            <Sidebar/>
            <Notifications/>
            <Link to="/add-attraction">
              <Button fab className={classes.fab}>
                <AddIcon />
              </Button>
            </Link>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(theme)(App);
