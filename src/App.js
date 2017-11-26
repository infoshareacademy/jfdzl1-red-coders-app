import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "./Reader";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";


class App extends Component {
    render() {
        return (
            <Router>
                <div>
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
