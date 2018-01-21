import React, {Component} from 'react'
import {ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'


const {PropTypes} = React;
const data = [{name: 'Page A', uv: 590, pv: 800, amt: 1400},
    {name: 'Page B', uv: 868, pv: 967, amt: 1506},
    {name: 'Page C', uv: 1397, pv: 1098, amt: 989},
    {name: 'Page D', uv: 1480, pv: 1200, amt: 1228},
    {name: 'Page E', uv: 1520, pv: 1108, amt: 1100},
    {name: 'Page F', uv: 1400, pv: 680, amt: 1700}];


class Chart2 extends Component{
    render(){
        return(
            <ComposedChart width={400} height={400} data={data}
                           margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                <XAxis dataKey="name"/>
                <YAxis />
                <Tooltip/>
                <Legend/>
                <CartesianGrid stroke='#f5f5f5'/>
                <Bar dataKey='uv' barSize={20} fill='#413ea0'/>
                <Line type='monotone' dataKey='uv' stroke='#ff7300'/>
            </ComposedChart>
        )
    }
}
export default Chart2