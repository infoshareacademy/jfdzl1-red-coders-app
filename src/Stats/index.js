import React, { Component } from 'react';
import Chart from './PieChart'

class Stats extends Component {

    render() {
        return (
            <div>
                <h1 width={700} height="80%">
                <Chart/>
                </h1>
            </div>
        )
    }
}

export default Stats;