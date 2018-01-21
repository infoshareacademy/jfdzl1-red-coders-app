import React, {Component} from 'react';
import {Pie, PieChart} from 'recharts'

const data01 = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
    {name: 'Group C', value: 300}, {name: 'Group D', value: 200}]

const data02 = [{name: 'A1', value: 100},
    {name: 'A2', value: 300},
    {name: 'B1', value: 100},
    {name: 'B2', value: 80},
    {name: 'B3', value: 40}]


class Chart extends Component {

    render() {
        return (
            <div>
                <PieChart width={400} height={400}>
                    <Pie data={data01} cx={200} cy={200} outerRadius={60} fill="#8884d8"/>
                    <Pie data={data02} cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d" label/>
                </PieChart>
            </div>
        )
    }
}

export default Chart