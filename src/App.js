import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import AccountForm from "./AccountForm";
import firebase from 'firebase';
//import reactfire from 'reactfire';
const storageKey = 'KEY_FOR_LOCAL_STORAGE';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            uid: null
        }
        
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
        return (
            <Router>
                <div>
                    <AccountForm/>
                    <Header/>
                    <Sidebar/>
                    <Route exact path="/" component={Dashboard}/>
                    <Route exact path="/main" component={null}/>
                </div>
            </Router>
        );
    }
}

export default App;
