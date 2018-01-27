import React, {Component} from 'react'
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts'

const data = [
    {name: 'YawnKiller', uv: 1, pv: 0}]

class StartupChart extends Component {
    render() {
        return (
            <AreaChart width={200} height={200} data={data} syncId="anyId"
                       margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8'/>
            </AreaChart>
        )
    }
}

export default StartupChart