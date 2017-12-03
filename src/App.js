import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "./header";
import Sidebar from "./sidebar";
import Stats from "./Stats";


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Sidebar/>
                    <Route exact path="/" component={null}/>
                    <Route exact path="/dashboard" component={null}/>
                    <Route exact path="/main" component={null}/>
                    <Route exact path="/stats" component={Stats}/>
                    <Stats/>
                </div>
            </Router>
        );
    }
}

export default App;
