import React, {Component} from 'react';
import {LineChart, Line} from 'recharts';
import {database} from 'firebase';

const data = [
    {name: 'Day 1', uv: 11},
    {name: 'Day 2', uv: 22},
    {name: 'Day 3', uv: 33},
    {name: 'Day 4', uv: 44},
    {name: 'Day 5', uv: 55},
    {name: 'Day 6', uv: 66},
    {name: 'Day 7', uv: 77},
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
                </LineChart>
            </div>
        )
    }
}

export default Stats;