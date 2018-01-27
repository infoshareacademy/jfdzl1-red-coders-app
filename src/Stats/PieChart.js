import React, {Component} from 'react'
import {Cell, Legend, Pie, PieChart, Tooltip} from 'recharts';
import {Grid} from 'material-ui';
import {withStyles} from 'material-ui/styles';
import PropTypes from 'prop-types';


const styles = theme => ({
    root: {
        width: '100%',
        padding: '10px',
    },
});

const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
    {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];
const COLORS = ['#f30000', '#f1b900', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const ChartLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

class ChartUsers extends Component {

    render() {
        const {classes} = this.props;

        return (
            <div>
                <Grid>
                    <PieChart  className={classes.root} onMouseEnter={this.onPieEnter}>
                        <Pie
                            data={data}
                            cx={300}
                            cy={200}
                            labelLine={false}
                            label={ChartLabel}
                            outerRadius={80}
                            fill="#8884d8"
                        >
                            {
                                data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                            }
                        </Pie>
                        <Legend/>
                        <Tooltip/>
                    </PieChart>
                </Grid>
            </div>
        );
    }
}

ChartUsers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(
    styles)(ChartUsers)