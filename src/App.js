import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import theme from './theme';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import AccountForm from "./AccountForm";
import {auth, isAuthenticated, storageKey, database} from './firebase';

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
            <Router>
                <div className={classes.root}>
                    <Grid container className={classes.items}>
                        <Header/>
                        <Sidebar/>
                        <Route exact path="/" component={Dashboard}/>
                        <Route exact path="/main" component={null}/>
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

