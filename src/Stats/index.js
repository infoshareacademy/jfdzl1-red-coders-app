import React, { Component } from 'react';
import Chart from './PieChart'
import Chart2 from "./ComposedChart";
import {chart-style} from './ChartStyle'

class Stats extends Component {
    render() {
        return (
            <div>
                <Chart class ="chart-style" />
                <Chart2 class ="chart-style" />
            </div>
        )
    }
}

export default Stats;