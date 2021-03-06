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
import {Paper} from 'material-ui';
import Typography from 'material-ui/Typography';


const chartCont = {
  flexGrow: 1,
  direction: 'row',
  alignItems: 'center',
  justify: 'center',
  boxSizing: "border-box"
};

class Stats extends Component {
  render() {
    return (
      <Paper>
        <Grid container
              spacing={8}
              text-align='center'
              justify='center'>
          <Grid style={chartCont}>
            <Grid>
              <Typography
                align="center"
                type="display1"
              >Type of Attractions</Typography>
              <PieChart width={300} height={200}>
                <Pie
                  dataKey='value'
                  startAngle={180}
                  endAngle={0}
                  data={dataAttr}
                  cx="50%" cy="70%"
                  outerRadius="80%"
                  fill="#e21b3a"
                  label/>
                <Tooltip/>
                <Legend/>
              </PieChart>
            </Grid>
          </Grid>
          <Grid style={chartCont}>
            <Grid>
              <Typography
                align="center"
                type="display1">
                Visitors
              </Typography>
              <ComposedChart width={300} height={200} data={dataVis}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid stroke='#f0111'/>
                <Bar dataKey='uv' barSize={20} fill='#413ea0'/>
                <Line type='monotone' dataKey='uv' stroke='#e2c63a'/>
              </ComposedChart>
            </Grid>
          </Grid>
          <Grid style={chartCont}>
            <Grid>
              <Typography
                align="center"
                type="display1">
                Our Startups
              </Typography>
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

const dataVis = [
  {name: 'Day 1', uv: 13},
  {uv: 87, amt: 989},
  {name: 'Day 30', uv: 110},
  {uv: 123, amt: 1100},
  {name: 'Day 100', uv: 200}];

const dataStartup = [
  {name: 'None', uv: 0, pv: 0},
  {name: 'YawnKiller', uv: 1, pv: 1}];

const dataAttr = [{name: 'Cinema', value: 23, fill:'green'}, {name: 'Theatre', value: 12, fill:'black'},
  {name: 'Books', value: 43, fill:'blue'}, {name: 'Public events', value: 52}];

export default Stats