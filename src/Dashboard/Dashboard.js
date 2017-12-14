import React, { Component } from 'react';
import Stats from './Stats'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exampleState: null,
        };

    }
    render() {
        return(
            <div>
                Dashboard
                <br/>
                <Stats/>
            </div>
        )
    }
}

export default Dashboard;