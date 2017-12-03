import React, {Component} from 'react';
import {LineChart, Line} from 'recharts';

const data = [
    {name: 'Page A', uv: 10},
    {name: 'Page B', uv: 40},
    {name: 'Page C', uv: 70},
    {name: 'Page D', uv: 2780},
    {name: 'Page E', uv: 70},
    {name: 'Page F', uv: 2390},
    {name: 'Page G', uv: 3490},
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