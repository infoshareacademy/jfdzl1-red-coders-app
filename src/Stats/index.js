import React, {Component} from 'react';
import {LineChart, Line} from 'recharts';

const data = [
    {name: 'Page A', uv: 70, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 70},
    {name: 'Page C', uv: 70, pv: 9800, amt: 70},
    {name: 'Page D', uv: 2780, pv: 70, amt: 2000},
    {name: 'Page E', uv: 70, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 70, amt: 2100},
];
const ChartStyle= {
    backgroundColor: 'yellow',
};
class Stats extends Component {

    render() {
        return (
            <div>
                <LineChart style={ChartStyle} width={400} height={400}  data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8"/>
                    <Line type="monotone" dataKey="pv" stroke="red"/>
                    <Line type="monotone" dataKey="amt" stroke="#8884d8"/>
                </LineChart>
            </div>
        )
    }
}

export default Stats;