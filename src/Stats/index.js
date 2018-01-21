import React, { Component } from 'react';
import Chart from './PieChart'
import Chart2 from "./ComposedChart";
import './ChartsStyle.css';


class Stats extends Component {
    render() {
        return (
            <div style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Chart/>
                <Chart2 />
            </div>
        )
    }
}

export default Stats;