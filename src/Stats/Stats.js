import React, {Component} from 'react';
import {
    Area,
    AreaChart,
    Bar,
    CartesianGrid,
    ComposedChart,
    Legend,
    Line,
    Pie,
    PieChart,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';
import Grid from 'material-ui/Grid';
import {Paper} from 'material-ui'


const chartCont = {
    flexGrow: 1,
    direction: 'row',
    alignItems: 'center',
    justify: 'center',
    marginBottom: 10,
    boxSizing: "border-box"
};

class Stats extends Component {
    render() {
        return (
            <Paper>
                <Grid container
                      spacing={12}
                      text-align='center'
                      justify='center'>
                    <Grid style={chartCont}>
                        <Grid item xs={4} style={{textAlign: 'center'}}>
                            <h1>Visitors</h1>
                            <PieChart width={300} height={200}>
                                <Pie startAngle={180} endAngle={0} data={dataAttr} cx="50%" cy="50%"
                                     outerRadius={50}
                                     fill="#e21b3a" label/>
                                <Tooltip/>
                                <Legend/>
                            </PieChart>
                        </Grid>
                    </Grid>
                    <Grid style={chartCont}>
                        <Grid item xs={4}>
                            <h1 style={{textAlign: 'center'}}>List of Attractions</h1>
                            <ComposedChart width={300} height={200} data={dataVis}>
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <Tooltip/>
                                <CartesianGrid stroke='#f0111'/>
                                <Bar dataKey='uv' barSize={20} fill='#413ea0'/>
                                <Line type='monotone' dataKey='uv' stroke='#e2c63a'/>
                            </ComposedChart>
                        </Grid>
                    </Grid>
                    <Grid style={chartCont}>
                        <Grid item xs={4}>
                            <h1 style={{textAlign: 'center'}}>Our Startups</h1>
                            <AreaChart width={300} height={200} data={dataStartup} syncId="anyId">
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <Area type='monotone' dataKey='uv' stroke='#e2fff2' fill='#99fff2'/>
                            </AreaChart>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}

const dataVis = [{name: 'Page A', uv: 4, pv: 800, amt: 1400},
    {name: 'Day 1', uv: 13, amt: 1506},
    {uv: 87, amt: 989},
    {name: 'Day 30', uv: 110, amt: 1228},
    {uv: 123, amt: 1100},
    {name: 'Day 100', uv: 200, amt: 1700}];

const dataStartup = [
    {name: 'None', uv: 0, pv: 0},
    {name: 'YawnKiller', uv: 1, pv: 1}];

const dataAttr = [{name: 'Day 0', value: 23}, {name: 'Day 10', value: 55},
    {name: 'Day 25', value: 139}, {name: '100', value: 204}];

export default Stats